import { useState } from 'react'

function useModal () {
  const [modalIsActive, setModalIsActive] = useState(false)

  const openModal = ({
    id,
    imgURL,
    name,
    score,
    overview
  }) => {
    console.log(id,
      imgURL,
      name,
      score,
      overview)
    setModalIsActive(true)
  }

  const closeModal = () => {
    setModalIsActive(false)
  }

  return { openModal, modalIsActive, setModalIsActive, closeModal }
}

export { useModal }
