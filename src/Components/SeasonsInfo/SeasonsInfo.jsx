/* eslint-disable react/prop-types */
import React from 'react'
import './SeasonsInfo.css'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'

// eslint-disable-next-line react/prop-types
const SeasonsInfo = ({ showSeasonsDetail }) => {

  if (!showSeasonsDetail) {
    return (
      <p>Cargando</p>
    )
  }

  return (
    <div className='seasons-list-container'>
      <CAccordion
        flush
      >
        {showSeasonsDetail.map((season, i) => {
          return (
            <CAccordionItem
              itemKey={i} key={i}
            >
              <CAccordionHeader className='aaa'>
                {`Season ${season.data.season_number}`}
              </CAccordionHeader>
              {season.data.episodes.map((episode, i) => {
                return (
                  <CAccordionBody
                    key={i}
                  ><strong>S{season.data.season_number} E{episode.episode_number}:</strong> {episode.name}
                  </CAccordionBody>
                )
              })}
            </CAccordionItem>
          )
        })}
      </CAccordion>
    </div>
  )
}

export { SeasonsInfo }
