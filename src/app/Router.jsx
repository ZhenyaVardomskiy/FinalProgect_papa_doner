import { Route, Routes } from 'react-router-dom'

import { ROUTES } from 'shared/const'

import { About, Contacts, Home, NotFound } from 'pages'


function Router() {
     return (
          <Routes>
               <Route path={ROUTES.HOME} element={<Home />} />
               <Route path={ROUTES.ABOUT} element={<About />} />
               <Route path={ROUTES.CONTACTS} element={<Contacts />} />
               <Route path="*" element={<NotFound />} />
          </Routes>
     )
}

export default Router
