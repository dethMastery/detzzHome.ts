import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ROUTES from './constants/route'
import Layout from './pages/_Layout'

import Home from './pages/Home/Index'
import NotFound from './pages/Errors/404'

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
