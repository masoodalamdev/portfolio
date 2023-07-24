import React from 'react'
import Education from '../Education/Education'
import Certification from '../Certification/Certification'
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import PageHeader from '../../Components/PageHeader/PageHeader'

export default function About() {
  return (

    <>
      <Grid container id="about" sx={{ mt: 16 }}>
        <Grid item xs={12}>
          <PageHeader
            heading='About'
          />
        </Grid>
        <Grid item xs={12}>

          <Box>

            <Typography variant='h6' sx={{ color: '#444' }}>

              Hi, I am a Full Stack Web Developer and Web Designer. An Open Source enthusiast and a Computer Science student from Pakistan.

              I love working on new and exciting technologies emerging nowadays. I have a keen interest in Web Development and I am always looking for new opportunities to learn and grow. I have good work experience with various startups where I was core part of developer team and work on major features.

              I am also a freelancer and have worked on various projects for clients and open for new projects.
            </Typography>

            <br />
            <Typography variant='h6' sx={{ color: '#444' }}>

              My passion is making ideas come to life, be it working solo, as part of a team or leading a team of fellow developers.

              Throughout my 5 years of development experience, I worked everywhere from startups to big companies, building products from the ground up or implementing new features.

              Also relevant to my set of skills is that - previously to becoming a developer - I worked as product manager for some of the biggest tech companies in the world, which still helps me to have a more holistic view of the whole work that goes into making a successful product.

              My go-to technologies are React and Node.js, and I have completed a wide range of projects using them. Those are not the only two libraries/frameworks I'm familiar with though, and I'm always happy to discuss my client's needs and find the best solutions for them.

              I consider myself creative and hardworking, as my stats show. If you liked my profile so far, drop me a message and we'll discuss how I can be useful to your project.
            </Typography>
          </Box>

          <Education />
          <Certification />
        </Grid>
      </Grid>

    </>

  )
}
