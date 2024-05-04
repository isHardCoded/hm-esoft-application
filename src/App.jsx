import { Route, Routes } from 'react-router-dom';
import './assets/styles/Main.scss'

import DetailMovie from "./components/pages/DetailMovie"
import MainMovie from './components/pages/MainMovie'
import SearchMovie from "./components/pages/SearchMovie"

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element ={<MainMovie/>}/>
          <Route path="/films/:title" element={<DetailMovie/>} />
          <Route path="search" element ={<SearchMovie/>}/>
        </Routes>
    </>
  )
}

export default App
