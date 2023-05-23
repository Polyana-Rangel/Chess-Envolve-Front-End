import { Routes, Route } from 'react-router-dom'
import StorePage from './pages/StorePage'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<StorePage />} />
  </Routes>
)

export default AppRoutes