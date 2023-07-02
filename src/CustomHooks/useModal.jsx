import { useState } from 'react'

function useModal () {
  const [modalIsActive, setModalIsActive] = useState(false)
  const [modalContent, setModalContent] = useState({})

  const openModal = ({
    id,
    imgURL,
    name,
    score,
    overview
  }) => {
    setModalContent({
      id,
      imgURL,
      name,
      score,
      overview
    })
    setModalIsActive(true)
  }

  const closeModal = () => {
    setModalIsActive(false)
  }

  return { openModal, modalIsActive, setModalIsActive, closeModal, modalContent }
}

export { useModal }
