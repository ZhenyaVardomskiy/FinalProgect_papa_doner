import { Route, Routes } from 'react-router-dom'

import { ROUTES } from 'shared/const'

import { About, Contacts, Home, NotFound, User } from 'pages'
import { UserModel } from 'models'
import { observer } from 'mobx-react-lite'
import { Menu } from 'pages/Menu'

function Router() {
     return (
          <Routes>
               <Route path={ROUTES.HOME} element={<Home />} />
               <Route path={ROUTES.ABOUT} element={<About />} />
               <Route path={ROUTES.CONTACTS} element={<Contacts />} />
               <Route path={ROUTES.MENU} element={<Menu />} />
               {UserModel.isLoggedIn() && (
                    <>
                         <Route path={ROUTES.USER} element={<User />} />
                    </>
               )}
               <Route path="*" element={<NotFound />} />
          </Routes>
     )
}

export default observer(Router)
