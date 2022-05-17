import { lazy } from 'solid-js'

const NotFound = lazy(() => import('../components/notFound'))

const all = () => {
  return (
    <>
      <NotFound />
    </>
  )
}

export default all
