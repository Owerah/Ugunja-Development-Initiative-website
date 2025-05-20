import React from 'react'
import Navbar from './_components/Navbar/Navbar'
import Header from './_components/Header/Header'
import Projects from './_components/Projects/Projects'
import Footer from './_components/Footer/Footer'
import OurTeam from './_components/Our Team/OurTeam'

function page() {
  return (
    <main>
      <Navbar />
      <Header />
      <Projects />
      <OurTeam />
      <Footer />
    </main>
  )
}

export default page