import { Route, Routes } from 'react-router-dom'

function Router() {
     return (
          <Routes>
               <Route path={ROUTES.HOME} element={<Home />} />
               <Route path={ROUTES.STATS} element={<Stats />} />
               <Route path={ROUTES.PROFILE} element={<Profile />} />
               {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
     )
}

export default Router
