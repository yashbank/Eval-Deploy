import { useState } from 'react'
import '../styles/globals.css'
import Navbar from './Components/Navbar'

export default function App({ Component, pageProps }) {

  const [light, setLight] = useState(true)

  const changeTheme = () => {
    setLight(!light)
    console.log(light)
  }
  return <div style={{
    backgroundColor: light ? "white" : "black",
    color: light ? "black" : "white"
  }}>
    <Navbar theme={changeTheme} style={{
      backgroundColor: light ? "white" : "black",
      color: light ? "black" : "white"
    }} /><Component {...pageProps} />
  </div>
}
