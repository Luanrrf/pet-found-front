import { Dispatch, SetStateAction } from 'react'
import PageContainer from '../pages/PageContainer'
import CloseIcon from '../atoms/CloseIcon'
import { Button } from '../atoms/Button'

export function ModalFilter({
  children,
  setOpenFilter,
}: {
  children: React.ReactNode
  setOpenFilter: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <PageContainer
      position="absolute"
      marginLeft="0"
      width="100%"
      left="0"
      top="0"
      padding="32px"
    >
      <Button
        onClick={() => setOpenFilter(false)}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 left-[50%] top-0 p-5 bg-white rounded-full shadow-lg"
      >
        <CloseIcon />
      </Button>
      {children}
    </PageContainer>
  )
}
