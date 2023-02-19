import { Route, Routes } from 'react-router-dom'

import { ROUTES } from 'shared/const'

import {
     About,
     Contacts,
     Home,
     NotFound,
     ShoppingCart,
     User,
     Menu,
} from 'pages'
import { UserModel } from 'models'
import { observer } from 'mobx-react-lite'

function Router() {
     return (
          <Routes>
               <Route path={ROUTES.HOME} element={<Home />} />
               <Route path={ROUTES.ABOUT} element={<About />} />
               <Route path={ROUTES.CONTACTS} element={<Contacts />} />
               <Route path={ROUTES.MENU} element={<Menu />} />
               <Route path={ROUTES.SHOPPING_CART} element={<ShoppingCart />} />
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
