import React from 'react'
import { useParams } from 'react-router-dom'
import { useApiSearch } from '../CustomHooks/useApiSearch'
import { SearchViewList } from '../Components/SearchViewList/SearchViewList'
import { LoadingSpinner } from '../Components/LoadingSpinner/LoadingSpinner'

const SearchPage = () => {
  const { valueToSearch } = useParams()
  console.log(valueToSearch)

  const { searchResult, loadingSearch } = useApiSearch(valueToSearch)

  if (loadingSearch) {
    return (
      <LoadingSpinner />
    )
  }

  return (
    <SearchViewList searchResult={searchResult} />
  )
}

export { SearchPage }
