import AnimalBrandHeader from '@/components/molecules/AnimalBrandHeader'
import FiltersForm from '@/components/organisms/FiltersForm'

interface Props {
  onClose: () => void
}

export default function FiltersTemplate({ onClose }: Props) {
  return (
    <main>
      <section className="mx-auto max-w-[360px] overflow-hidden rounded-[18px] bg-[#FEE7B8]">
        <AnimalBrandHeader />
        <FiltersForm onClose={onClose} />
      </section>
    </main>
  )
}
