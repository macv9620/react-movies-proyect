import './App.css'
import { Header } from '../Components/Header/Header.jsx'
import { BrowserRouter } from 'react-router-dom'
import { RoutesIndex } from '../routes'
import { PageFooter } from '../Components/Footer/Footer'
import { HomeButton } from '../Components/HomeButton/HomeButton'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
        <PageFooter />
        <HomeButton />
      </BrowserRouter>
    </>
  )
}

export { App }
