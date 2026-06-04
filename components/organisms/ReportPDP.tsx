import React, { useEffect, useState } from 'react'
import ReportIcon from '../atoms/ReportIcon'
import ModalReport from '../molecules/ModalReport'
import useContact from '../utils/useContact'
import Loading from '../atoms/Loading'
import useMyAnimals from '../utils/useMyAnimals'
import { useProductContext } from '../contexts/ProductContext'
import { findAnimalById } from './PDPMainImage'

const ReportPDP = () => {
  const { productContext } = useProductContext()
  const [modalOpen, setModalOpen] = useState(false)
  const [thisIsMyAnimal, setThisIsMyAnimal] = useState<boolean>(false)

  const { user, loading } = useContact()

  const verifyIfAnimalIsYours = async () => {
    const myAnimals = await useMyAnimals()
    if (!myAnimals) return

    const thisIsMyAnimal = findAnimalById(myAnimals, productContext?.id ?? 0)

    setThisIsMyAnimal(thisIsMyAnimal)
  }

  useEffect(() => {
    verifyIfAnimalIsYours()
  }, [])

  if (loading) {
    return <Loading />
  }

  const hasUser = !user || user.status !== 401

  if (!hasUser || thisIsMyAnimal) return <></>

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-[#FF6B6B] text-white px-2 py-2 rounded-[18px] absolute top-2 left-2 cursor-pointer"
      >
        <ReportIcon />
      </button>

      {modalOpen && <ModalReport setReportModalOpen={setModalOpen} />}
    </>
  )
}

export default ReportPDP
