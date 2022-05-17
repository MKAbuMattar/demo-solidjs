import { lazy } from 'solid-js'

const Home = lazy(() => import('../components/home'))

const index = () => {
  return (
    <>
      <Home />
    </>
  )
}

export default index
