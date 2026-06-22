import { Dispatch, SetStateAction } from 'react'
import CloseIcon from '../atoms/CloseIcon'
import { Button } from '../atoms/Button'
import Modal from '../organisms/Modal'

export function ModalFilter({
  children,
  setOpenFilter,
}: {
  children: React.ReactNode
  setOpenFilter: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <Modal closeModal={() => setOpenFilter(false)} hasCloseButton={false}>
      <div className="py-4 px-6">
        <Button
          onClick={() => setOpenFilter(false)}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 left-[50%] top-0 p-5 bg-white rounded-full shadow-lg"
        >
          <CloseIcon />
        </Button>
        {children}
      </div>
    </Modal>
  )
}
