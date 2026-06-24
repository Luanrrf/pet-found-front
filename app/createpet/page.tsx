'use client'

import { useState } from 'react'
import DOMPurify from 'dompurify'

import PageTemplate from '@/components/pages/PageTemplate'
import RegisterPetForm from '@/components/organisms/RegisterPetForm'
import WarningModal from '@/components/molecules/WarningModal'
import RequestGenericError from '@/components/molecules/RequestGenericError'
import RequestSuccess from '@/components/molecules/RequestSuccess'
import { API_URL } from '@/components/constants/api'
import { getCookie } from '@/components/utils/getCookie'
import RequireAuth from '@/components/utils/RequireAuth'
import { getFormString } from '@/utils/formData'
import { normalizeAnimalImageUrl } from '@/utils/animalMappers'

async function uploadImage(file: File | null): Promise<{
  filename: string
  path: string
  url: string
} | null> {
  if (!file) return null

  const token = getCookie('token')
  const formData = new FormData()
  formData.append('image', file)

  const imageUrl = await fetch(`${API_URL}/animal/upload`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  }).then((res) => res.json())

  return imageUrl
}

export default function CreatePetPage() {
  const [open, setOpen] = useState(true)
  const [file, setFile] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error'
    message: string
    key: number
  } | null>(null)

  async function handleCreatePet(formData: FormData) {
    if (submitting) return

    const requiredFields = ['name', 'type', 'breed', 'size', 'gender']
    const hasEmptyField = requiredFields.some(
      (field) => !getFormString(formData, field)
    )

    if (hasEmptyField || !file) {
      setFeedback({
        type: 'error',
        message:
          'Preencha todos os campos obrigatorios antes de registrar o pet.',
        key: Date.now(),
      })
      return
    }

    setSubmitting(true)
    const token = getCookie('token')

    try {
      const imageUrl = await uploadImage(file)
      const uploadedImageUrl = normalizeAnimalImageUrl(
        imageUrl?.url || imageUrl?.path
      )

      const response = await fetch(`${API_URL}/animal`, {
        method: 'POST',

        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          name: DOMPurify.sanitize(formData.get('name') as string),
          type: DOMPurify.sanitize(formData.get('type') as string),
          breed: DOMPurify.sanitize(formData.get('breed') as string),
          size: DOMPurify.sanitize(formData.get('size') as string),
          gender: DOMPurify.sanitize(formData.get('gender') as string),
          images: uploadedImageUrl ? [uploadedImageUrl] : [],
          observations: DOMPurify.sanitize(
            formData.get('observations') as string
          ),
          is_adopted: false,
        }),
      })

      if (response.ok) {
        setFeedback({
          type: 'success',
          message: 'Pet registrado com sucesso!',
          key: Date.now(),
        })
        return
      }

      setFeedback({
        type: 'error',
        message: 'Nao foi possivel registrar o pet.',
        key: Date.now(),
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <PageTemplate hasDefaultHeader>
      <RequireAuth>
        <div className="w-full max-w-[600px] pb-6">
          <h1 className="text-[#333] max-md:text-[24px] md:text-[32px] font-bold leading-[40px] mb-6">
            Encontrou um <span className="text-[#EF7E06]">animal</span>
            <br />
            perdido?
          </h1>

          <RegisterPetForm
            onSubmit={handleCreatePet}
            file={file}
            setFile={setFile}
            submitting={submitting}
          />

          <WarningModal open={open} onClose={() => setOpen(false)} />

          {feedback?.type === 'error' && (
            <RequestGenericError
              key={feedback.key}
              message={feedback.message}
            />
          )}

          {feedback?.type === 'success' && (
            <RequestSuccess
              key={feedback.key}
              message={feedback.message}
              redirectTo="/pets"
            />
          )}
        </div>
      </RequireAuth>
    </PageTemplate>
  )
}
