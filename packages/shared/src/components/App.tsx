import { Route, Routes } from 'react-router'

import HomePage from '../../../app/src/pages/home'
import NotFoundPage from '../../../app/src/pages/not-found'

const App = () => {
  return (
    <Routes>
      <Route Component={HomePage} path="/" />
      <Route Component={NotFoundPage} path="*" />
    </Routes>
  )
}

export default App
