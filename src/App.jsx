import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/main/Main'
import Detail from './pages/detail/other/Detail'
import ArtistDetail from './pages/detail/artist/ArtistDetail'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import CreateMusic from './pages/detail/artist/music/CreateMusic'
function App() {


  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-zinc-950 flex flex-col p-2 overflow-hidden">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createmusic" element={<CreateMusic />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/artist-detail" element={<ArtistDetail />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
