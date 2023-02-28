import { observer } from "mobx-react-lite"
import { UserModel } from "models"
import { Menu } from "pages/Menu"


function Home() {
     return (
          <div>
               Home
               <div>Меня зовут{UserModel.name}</div>
               <div>Меня зовут{UserModel.email}</div>
               <Menu/>
          </div>
     )
}

export default observer(Home)
