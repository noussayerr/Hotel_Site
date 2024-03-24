import './App.css'
import Home from './assets/view/Home'
import Layout from './assets/components/Layout'
import Login from './assets/view/login'
import   {Routes,Route} from 'react-router-dom'
import Create from './assets/view/Create'

import axios from 'axios'
import Explore from './assets/view/explore'
import Profil from './assets/view/Profil'
import Createplace from './assets/view/createplace'
import Oneplace from './assets/view/Oneplace'

axios.defaults.baseURL='http://localhost:8000'
function App() {

  return (
    <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='explore' element={<Explore />} />
      <Route path='login' element={<Login />}/>
      <Route path='create_account' element={<Create />}/>
      <Route path='profil' element={<Profil />}/>
      <Route path='add_place' element={<Createplace /> } />
      <Route path='/place/:placeId'  element={<Oneplace />}/>
    </Route>  
  </Routes>
  )
}

export default App
