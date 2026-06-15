'use client'

import { Suspense, useEffect, useState } from 'react'
import DOMPurify from 'dompurify'

import PageTemplate from '@/components/pages/PageTemplate'
import EditPetTemplate from '@/components/templates/EditPetTemplate'
import WarningModal from '@/components/molecules/WarningModal'
import { API_URL } from '@/components/constants/api'
import { getCookie } from '@/components/utils/getCookie'
import RequireAuth from '@/components/utils/RequireAuth'
import { useSearchParams } from 'next/navigation'
import type { AnimalProps } from '@/components/types/animal'
import Loader from '@/components/atoms/Loader'
import { firstAnimalImage } from '@/utils/animalMappers'

function EditPetContent() {
  const [open, setOpen] = useState(true)
  const [animal, setAnimal] = useState<AnimalProps | null>(null)
  const [loadingAnimal, setLoadingAnimal] = useState(true)
  const searchParams = useSearchParams()
  const petId = searchParams.get('id')

  useEffect(() => {
    if (!petId) {
      setLoadingAnimal(false)
      return
    }

    fetch(`${API_URL}/animal/${petId}`)
      .then((response) => response.json())
      .then((data) => setAnimal(data))
      .finally(() => setLoadingAnimal(false))
  }, [petId])

  async function handleEditPet(formData: FormData) {
    const token = getCookie('token')

    if (!petId) {
      alert('Animal não encontrado para edição.')
      return
    }

    const response = await fetch(`${API_URL}/animal/${petId}`, {
      method: 'PATCH',

      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        name: DOMPurify.sanitize(formData.get('name') as string),
        breed: DOMPurify.sanitize(formData.get('breed') as string),
        type: DOMPurify.sanitize(formData.get('type') as string),
        size: DOMPurify.sanitize(formData.get('size') as string),
        gender: DOMPurify.sanitize(formData.get('gender') as string),
        image:
          DOMPurify.sanitize(formData.get('image') as string) ||
          firstAnimalImage(animal),
        observations: DOMPurify.sanitize(
          formData.get('observations') as string
        ),
        is_adopted: formData.get('is_adopted') === 'true',
      }),
    })

    if (response.ok) {
      alert('Pet atualizado com sucesso!')
    }
  }

  return (
    <PageTemplate hasDefaultHeader>
      <RequireAuth>
        {loadingAnimal ? (
          <Loader />
        ) : (
          <EditPetTemplate onSubmit={handleEditPet} animal={animal} />
        )}

        <WarningModal open={open} onClose={() => setOpen(false)} />
      </RequireAuth>
    </PageTemplate>
  )
}

export default function EditPetPage() {
  return (
    <Suspense fallback={null}>
      <EditPetContent />
    </Suspense>
  )
}
