import React from 'react'

interface ModalProps {
  children: React.ReactNode
  closeModal: () => void
  hasCloseButton?: boolean
}

const Modal = ({ children, closeModal, hasCloseButton = true }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      <button
        className="absolute inset-0 z-[1] border-none bg-black opacity-20"
        onClick={closeModal}
        aria-label="Close modal"
      />

      <div
        className="absolute left-1/2 top-1/2 z-[2] flex h-fit w-full -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl bg-white py-4 px-2 shadow-[4.4px_35px_32px_0_rgba(0,0,0,0.12)]"
        style={{
          maxWidth: 'calc(100% - 24px)',
        }}
      >
        <div className="flex flex-col overflow-auto">{children}</div>

        {hasCloseButton && (
          <button
            className="cursor-pointer bg-[var(--primary)] w-full max-w-[260px] py-[10px] m-auto text-white rounded-xl px-4 hover:brightness-80 mt-4"
            onClick={closeModal}
          >
            Fechar
          </button>
        )}
      </div>
    </div>
  )
}

export default Modal
