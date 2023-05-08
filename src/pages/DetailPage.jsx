import React from 'react'
import { MovieDetail } from '../Components/MovieDetail/MovieDetail.jsx'
import { SeasonsInfo } from '../Components/SeasonsInfo/SeasonsInfo.jsx'
import { useApiDetail } from '../CustomHooks/useApiDetail.jsx'
import { useParams } from 'react-router-dom'
import { ShowCast } from '../Components/ShowCastList/ShowCastList.jsx'

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500'

const DetailPage = () => {
  const { id } = useParams()
  const { showDetail, showSeasonsDetail, castList, loadingCast } = useApiDetail(id)

  if (!castList) {
    return (
      <p>Cargando</p>
    )
  }

  console.log('Cast List', castList.data.cast.slice(0, 10))
  return (
    <>
      <MovieDetail showDetail={showDetail} />
      <ShowCast>
        {!loadingCast &&
          castList.data.cast.slice(0, 10).map((character, i) => {
            return (
              <li key={i} className='movie-container'>
                <div className='character-container'>
                  <img
                    className='movie-img'
                    alt=''
                    title=''
                    src={BASE_URL_IMAGE + character.profile_path}
                  />
                  <p className='character-name'>'{character.roles[0].character}'</p>
                  <p className='character-name'>{character.name}</p>
                </div>
              </li>
            )
          })}
      </ShowCast>
      <SeasonsInfo showSeasonsDetail={showSeasonsDetail} />
    </>
  )
}

export { DetailPage }
