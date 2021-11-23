import { useState, useEffect } from "react"
import Sidebar from "components/Sidebar"
import Navbar from "components/Navbar"
import Hero from "components/Hero"
import About from "components/About"
import Feature from "components/Freatures"
import Slider from "components/Slider"
import Breeding from "components/Breeding"
import Roadmap from "components/Roadmap"
import Team from "components/Team"
import FAQ from "components/Faq"
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
      <Navbar show={showSidebar} onHandleSidebar={onHandleSidebar} />
      <Hero />
      <About />
      <Feature />
      <Slider />
      <Breeding />
      <Roadmap />
      <FAQ />
      <Team />
      {/* <Footer /> */}
    </>
  )
}

export default Dashboard
