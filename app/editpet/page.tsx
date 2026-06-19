'use client'

import { Suspense, useEffect, useState } from 'react'

import PageTemplate from '@/components/pages/PageTemplate'
import EditPetTemplate from '@/components/templates/EditPetTemplate'
import WarningModal from '@/components/molecules/WarningModal'
import { API_URL } from '@/components/constants/api'
import RequireAuth from '@/components/utils/RequireAuth'
import { useSearchParams } from 'next/navigation'
import type { AnimalProps } from '@/components/types/animal'
import Loader from '@/components/atoms/Loader'

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

  return (
    <PageTemplate hasDefaultHeader>
      <RequireAuth>
        {loadingAnimal ? <Loader /> : <EditPetTemplate animal={animal} />}

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
