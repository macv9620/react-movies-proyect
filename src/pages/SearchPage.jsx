import React from 'react'
import { useParams } from 'react-router-dom'
import { useApiSearch } from '../CustomHooks/useApiSearch'
import { SearchViewList } from '../Components/SearchViewList/SearchViewList'

const SearchPage = () => {
  const { valueToSearch } = useParams()
  console.log(valueToSearch)

  const { searchResult } = useApiSearch(valueToSearch)

  if (!searchResult) {
    return (
      <div>Cargando...</div>
    )
  }

  return (
    <SearchViewList searchResult={searchResult} />
  )
}

export { SearchPage }
