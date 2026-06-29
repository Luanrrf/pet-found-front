import FiltersForm from '@/components/organisms/FiltersForm'

interface Props {
  onClose: () => void
}

export default function FiltersTemplate({ onClose }: Props) {
  return (
    <main>
      <section className="mx-auto max-w-[360px] overflow-hidden rounded-[18px] bg-[#FEE7B8]">
        <div className="px-4 pb-4 pt-5">
          <p className="mt-1 font-bold text-[#333] text-[28px] leading-[32px]">
            Esse pet pode ser seu amigo!
          </p>
        </div>
        <FiltersForm onClose={onClose} />
      </section>
    </main>
  )
}
