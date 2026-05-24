'use client'

import { useRouter } from 'next/navigation'
import PageTemplate from '@/components/pages/PageTemplate'
import FiltersTemplate from '@/components/templates/FiltersTemplate'

export default function FiltersPage() {
  const router = useRouter()

  return (
    <PageTemplate hasDefaultHeader>
      <FiltersTemplate onClose={() => router.back()} />
    </PageTemplate>
  )
}
