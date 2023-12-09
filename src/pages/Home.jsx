import React from 'react'
import About from '../components/about/About'
import SaraswatiPuja from '../components/saraswati_puja/Saraswati_Puja'
import Banner from '../components/banner/Banner'
import Navbar from '../components/navbar/Navbar'
import Contact from '../components/contact/Contact'
import CommitteeMembers from '../components/committee_members/CommitteeMembers'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <SaraswatiPuja />
      <CommitteeMembers />
      <Contact />
      <Footer />
    </>  
  )
}

export default Home