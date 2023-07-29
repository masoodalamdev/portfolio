import React from 'react'
import Developer from '../../Assets/Images/developer.svg'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import LandingPage from '../LandingPage/LandingPage'
import Education from '../Education/Education'
import Certification from '../Certification/Certification'
export default function Home() {
  return (
    <>

      <LandingPage />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Education />
      <Certification />
      <Footer />
    </>
  )
}
