'use client'

import { useState } from 'react'
import DOMPurify from 'dompurify'

import PageTemplate from '@/components/pages/PageTemplate'
import RegisterPetForm from '@/components/organisms/RegisterPetForm'
import WarningModal from '@/components/molecules/WarningModal'
import { API_URL } from '@/components/constants/api'

export default function CreatePetPage() {
  const [open, setOpen] = useState(true)

  async function handleCreatePet(formData: FormData) {
    const token = localStorage.getItem('token')

    const response = await fetch(`${API_URL}/animal`, {
      method: 'POST',

      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        type: DOMPurify.sanitize(formData.get('type') as string),

        size: DOMPurify.sanitize(formData.get('size') as string),

        gender: DOMPurify.sanitize(formData.get('gender') as string),

        image: DOMPurify.sanitize(formData.get('image') as string),

        observations: DOMPurify.sanitize(
          formData.get('observations') as string
        ),

        is_adopted: false,
      }),
    })

    if (response.ok) {
      alert('Pet registrado com sucesso!')
    }
  }

  return (
    <PageTemplate hasDefaultHeader>
      <div className="px-5 py-6 min-h-screen">
        <h1 className="text-[#333] text-[32px] font-bold leading-[40px] mb-6">
          Encontrou um <span className="text-[#EF7E06]">animal</span>
          <br />
          perdido?
        </h1>

        <RegisterPetForm onSubmit={handleCreatePet} />

        <WarningModal open={open} onClose={() => setOpen(false)} />
      </div>
    </PageTemplate>
  )
}
