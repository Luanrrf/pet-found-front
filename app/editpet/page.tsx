'use client'

import { useState } from 'react'
import DOMPurify from 'dompurify'

import PageTemplate from '@/components/pages/PageTemplate'
import EditPetTemplate from '@/components/templates/EditPetTemplate'
import WarningModal from '@/components/molecules/WarningModal'
import { API_URL } from '@/components/constants/api'

export default function EditPetPage() {
  const [open, setOpen] = useState(true)

  async function handleEditPet(formData: FormData) {
    const token = localStorage.getItem('token')

    const response = await fetch(`${API_URL}/animal/1`, {
      method: 'PATCH',

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

        is_adopted: formData.get('is_adopted') === 'true',
      }),
    })

    if (response.ok) {
      alert('Pet atualizado com sucesso!')
    }
  }

  return (
    <PageTemplate hasDefaultHeader>
      <EditPetTemplate onSubmit={handleEditPet} />

      <WarningModal open={open} onClose={() => setOpen(false)} />
    </PageTemplate>
  )
}
