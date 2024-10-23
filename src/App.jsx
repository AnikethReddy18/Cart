import { Outlet, Link } from "react-router-dom"
import style from "./app.module.css"
import { useState } from "react"

function App() {
  const [cartItems, setCartItems] = useState([])
  return (
    <>
    <nav>
      <img src="assets/react.svg" alt="" className="logo" />
      <div className={style.middleLinks}>
        <Link className={style.link} to="/home">Home</Link>
        <Link className={style.link} to="/shop">Shop</Link>
      </div>
      <Link className={style.link} to="/cart">Cart</Link>
    </nav>
    <Outlet context={{cartItems, setCartItems}}/>
    </>
  )
}

export default App
