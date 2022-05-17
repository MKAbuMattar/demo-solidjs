/* @refresh reload */
import { lazy } from 'solid-js'
import { render } from 'solid-js/web'
import { Router } from 'solid-app-router'

const App = lazy(() => import('./App'))

import './styles/normalize.css'
import './styles/index.css'

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root'),
)
