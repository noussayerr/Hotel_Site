import './App.css'
import Home from './assets/view/Home'
import Layout from './assets/components/Layout'
import Login from './assets/view/login'
import   {Routes,Route} from 'react-router-dom'
import Create from './assets/view/Create'

import axios from 'axios'
import Explore from './assets/view/explore'
import Profil from './assets/view/Profil'

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
    </Route>  
  </Routes>
  )
}

export default App
