import { lazy } from 'solid-js'
import { Routes, Route } from 'solid-app-router'

const Nav = lazy(() => import('./components/nav'))
const Home = lazy(() => import('./pages/index.jsx'))
const NotFound = lazy(() => import('./pages/[...all].jsx'))

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*all" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
