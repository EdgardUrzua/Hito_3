import { useState } from 'react'
import './App.css'
import  Navbar  from './componenetes/Navbar'
import Header from './componenetes/Header'
// import Home from './componentes/Home'
// import RegisterPage from './componentes/RegisterPage'
// import LoginPage from './componentes/LoginPage'
import Cart from './componenetes/Cart'
import Footer from './componenetes/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Header></Header>
    {/* <Home></Home> */}
    {/*<RegisterPage></RegisterPage>*/} 
    {/*<LoginPage></LoginPage>*/}
    <Cart />
    <Footer></Footer>
    </>
  )
}

export default App;
