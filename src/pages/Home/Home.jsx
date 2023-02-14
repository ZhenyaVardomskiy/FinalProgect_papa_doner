import { observer } from "mobx-react-lite"
import { UserModel } from "models"


function Home() {
     return (
          <div>
               Home
               <div>Меня зовут{UserModel.name}</div>
               <div>Меня зовут{UserModel.email}</div>
          </div>
     )
}

export default observer(Home)
