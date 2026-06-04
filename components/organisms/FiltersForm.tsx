import IconButton from '@/components/atoms/IconButton'
import { Button } from '@/components/atoms/Button'
import FilterOption from '@/components/molecules/FilterOption'

interface Props {
  onClose: () => void
}

export default function FiltersForm({ onClose }: Props) {
  return (
    <form className="relative rounded-t-[14px] bg-white px-8 pb-8 pt-10">
      <IconButton
        label="Fechar filtros"
        onClick={onClose}
        className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl text-[#EF7E06] shadow-md"
      >
        ×
      </IconButton>

      <fieldset className="space-y-3">
        <legend className="mb-3 text-xs font-medium text-[#555]">Porte</legend>

        <FilterOption
          name="size"
          value="small"
          label="Pequeno"
          defaultChecked
        />
        <FilterOption name="size" value="medium" label="Médio" defaultChecked />
        <FilterOption name="size" value="large" label="Grande" defaultChecked />
      </fieldset>

      <fieldset className="mt-6 space-y-3">
        <legend className="mb-3 text-xs font-medium text-[#555]">Sexo</legend>

        <FilterOption name="gender" value="male" label="Macho" defaultChecked />
        <FilterOption
          name="gender"
          value="female"
          label="Fêmea"
          defaultChecked
        />
      </fieldset>

      <Button
        type="submit"
        className="mx-auto mt-28 h-12 w-[140px] rounded-md px-0 py-0 text-sm font-semibold"
      >
        Filtrar
      </Button>
    </form>
  )
}
