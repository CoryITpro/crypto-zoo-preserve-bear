import { useState, useEffect } from "react"
import Sidebar from "components/Sidebar"
import Navbar from "components/Navbar"
import About from "components/About"
import Feature from "components/Freatures"
import Roadmap from "components/Roadmap"
import Team from "components/Team"
import Footer from "components/Footer"

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", getWindowWidth)

    return () => window.removeEventListener("resize", getWindowWidth)
  }, [])

  const getWindowWidth = () => {
    const { innerWidth: width } = window

    if (width > 1024) {
      setShowSidebar(false)
    }
  }

  const onHandleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <>
      <Sidebar show={showSidebar} onHandleSidebar={onHandleSidebar} />
      <Navbar onHandleSidebar={onHandleSidebar} />
      <About />
      <Feature />
      <Roadmap />
      <Team />
      <Footer />
    </>
  )
}

export default Dashboard
