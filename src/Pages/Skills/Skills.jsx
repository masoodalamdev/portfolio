import React from 'react'
import html from '../../Assets/Images/skills/html.png'
import css from '../../Assets/Images/skills/css.png'
import js from '../../Assets/Images/skills/js.png'
import react from '../../Assets/Images/skills/reactjs.png'
import nodejs from '../../Assets/Images/skills/node.png'
import express from '../../Assets/Images/skills/express.png'
import firebase from '../../Assets/Images/skills/firebase.png'
import mongodb from '../../Assets/Images/skills/mongodb.png'
import bootstrap from '../../Assets/Images/skills/bootstrap.png'
import adsense from '../../Assets/Images/skills/adsense.png'
import admob from '../../Assets/Images/skills/admob.png'
import gsc from '../../Assets/Images/skills/gsc.png'
import seo from '../../Assets/Images/skills/seo.png'
import wordpress from '../../Assets/Images/skills/wordpress.png'
import blogger from '../../Assets/Images/skills/blogger.png'
import github from '../../Assets/Images/skills/github.png'
import mui from '../../Assets/Images/skills/mui.png'
import redux from '../../Assets/Images/skills/redux.png'
import tailwind from '../../Assets/Images/skills/tailwind.png'
import wix from '../../Assets/Images/skills/wix.png'
import { Box, Card, CardContent, Grid, Stack, Typography, Chip, Button, Paper, Divider } from '@mui/material'
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { NoteRounded } from '@mui/icons-material'
import PageHeader from '../../Components/PageHeader/PageHeader'
import frontend from '../../Assets/Images/skills/frontend8.gif'
import backend from '../../Assets/Images/skills/backend9.gif'
import database from '../../Assets/Images/skills/database.gif'
import cms from '../../Assets/Images/skills/cms2.gif'
import vcs from '../../Assets/Images/skills/vcs3.gif'
import google from '../../Assets/Images/skills/google3.gif'
import SkillCard from '../../Components/SkillCard/SkillCard'

export default function Skills() {
  return (
    <>
      <Grid container id="skills" sx={{ px: { xs: 8 }, minHeight: 100 + 'vh' }}>
        <Grid item xs={12}>
          <PageHeader
            heading='Skills'
          />
        </Grid>
        {/* =========== FRONT_END SKILLS  ========== */}
        <Grid container sx={{ py: 4 }} >
          <Grid item xs={12} md={7} sx={{p:4}}>
            <img src={frontend} height='100%' width='100%' />

          </Grid>
          <Grid item xs={12} md={5} sx={{ bgcolor: "#8B13FD", borderRadius: '1rem', p: 4, boxShadow: 3 }} >
          
            <Grid container spacing={2} >
              <Grid item xs={12} >
                <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: '#fff', fontFamily: 'inherit', fontWeight: 'bold' }} >
                  Front-end Development
                </Typography>
              </Grid>
              <Grid item md={4} xs={6} >
                <SkillCard
                  image={html}
                  title='HTML'
                />
              </Grid>
              <Grid item md={4} xs={6} >
                <SkillCard
                  image={css}
                  title='CSS'
                />
              </Grid>
              <Grid item md={4} xs={6} >
                <SkillCard
                  image={js}
                  title='Javascript'
                />
              </Grid>
              <Grid item md={4} xs={6} >
                <SkillCard
                  image={react}
                  title='React Js'
                />
              </Grid>
              <Grid item md={4} xs={6} >
                <SkillCard
                  image={bootstrap}
                  title='Bootstrap'
                />
              </Grid>
              <Grid item md={4} xs={6} >
                <SkillCard
                  image={redux}
                  title='Redux'
                />
              </Grid>
              <Grid item md={4} xs={6} >
                <SkillCard
                  image={mui}
                  title='Material UI'
                />
              </Grid>
              <Grid item md={4} xs={6} >
                <SkillCard
                  image={tailwind}
                  title='Tailwind'
                />
              </Grid>



            </Grid>
           
          </Grid>

        </Grid>
        <Grid item xs={12} sx={{display:{md: 'none'}}} >
        <Divider sx={{borderColor: '#a242fd'}}/>
        </Grid>
        {/* =========== FRONT_END SKILLS ENDED ========== */}
        {/* =========== BACKEND SKILLS  ========== */}


        <Grid container sx={{ py: 4 }}  >
        
          <Grid item xs={12} md={5} sx={{ bgcolor: "#8B13FD", borderRadius: '1rem', p: 4, boxShadow: 3 }}>
            <Grid container spacing={2} >
            <Grid item xs={12} >
                <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: '#fff', fontFamily: 'inherit', fontWeight: 'bold' }} >
                  Back-end Development
                </Typography>
              </Grid>
              <Grid item md={4} xs={6} >
                <SkillCard
                  image={nodejs}
                  title='Node Js'
                />
              </Grid>
              <Grid item md={4} xs={6} >
                <SkillCard
                  image={express}
                  title='Express Js'
                />
              </Grid>



            </Grid>
          </Grid>
          <Grid item xs={12} md={7} sx={{p:4}} >
            <img src={backend} height='100%' width='100%' />

          </Grid>
        </Grid>





        {/* =========== BACKEND SKILLS ENDED ========== */}
        <Grid item xs={12} sx={{display:{md: 'none'}}} >
        <Divider sx={{borderColor: '#a242fd'}}/>
        </Grid>

        {/* =========== DATABASE SKILLS  ========== */}
        <Grid container sx={{ py: 4 }}  >
          <Grid item xs={12} md={7} sx={{p:4}}>
            <img src={database} height='100%' width='100%' />

          </Grid>
          <Grid item xs={12} md={5} sx={{ bgcolor: "#8B13FD", borderRadius: '1rem', p: 4, boxShadow: 3 }}>
            <Grid container spacing={2} >
            <Grid item xs={12} >
                <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: '#fff', fontFamily: 'inherit', fontWeight: 'bold' }} >
                  Database
                </Typography>
              </Grid>
              <Grid item md={4} xs={6} >
                <SkillCard
                  image={mongodb}
                  title='Mongo DB'
                />
              </Grid>



            </Grid>
          </Grid>

        </Grid>


      

        {/* =========== DATABASE SKILLS ENDED ========== */}
  <Grid item xs={12} sx={{display:{md: 'none'}}} >
        <Divider sx={{borderColor: '#a242fd'}}/>
        </Grid>
        {/* =========== CMS SKILLS  ========== */}


        <Grid container sx={{ py: 4 }}  >
        
          <Grid item xs={12} md={5} sx={{ bgcolor: "#8B13FD", borderRadius: '1rem', p: 4, boxShadow: 3 }}>
            <Grid container spacing={2} >
            <Grid item xs={12} >
                <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: '#fff', fontFamily: 'inherit', fontWeight: 'bold' }} >
                  Content Management System CMS
                </Typography>
              </Grid>
              <Grid item md={4} xs={6} >
                <SkillCard
                  image={wordpress}
                  title='Wordpress'
                />
              </Grid>
              <Grid item md={4} xs={6} >
                <SkillCard
                  image={wix}
                  title='Wix'
                />
              </Grid>
              <Grid item md={4} xs={6} >
                <SkillCard
                  image={blogger}
                  title='Blogger'
                />
              </Grid>



            </Grid>
          </Grid>
          <Grid item xs={12} md={7} sx={{p:4}} >
            <img src={cms} height='100%' width='100%' />

          </Grid>
        </Grid>




        {/* =========== CMS SKILLS ENDED ========== */}
        <Grid item xs={12} sx={{display:{md: 'none'}}} >
        <Divider sx={{borderColor: '#a242fd'}}/>
        </Grid>
                {/* =========== VCS SKILLS  ========== */}
                <Grid container sx={{ py: 4 }}  >
          <Grid item xs={12} md={7} sx={{p:4}}>
            <img src={vcs} height='100%' width='100%' />

          </Grid>
          <Grid item xs={12} md={5} sx={{ bgcolor: "#8B13FD", borderRadius: '1rem', p: 4, boxShadow: 3 }}>
            <Grid container spacing={2} >
            <Grid item xs={12} >
                <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: '#fff', fontFamily: 'inherit', fontWeight: 'bold' }} >
                  Version Control System VCS
                </Typography>
              </Grid>
              <Grid item md={4} xs={6} >
                <SkillCard
                  image={github}
                  title='Github'
                />
              </Grid>



            </Grid>
          </Grid>

        </Grid>


      

        {/* =========== VCS SKILLS ENDED ========== */}
        <Grid item xs={12} sx={{display:{md: 'none'}}} >
        <Divider sx={{borderColor: '#a242fd'}}/>
        </Grid>
             {/* =========== Google SKILLS  ========== */}


             <Grid container sx={{ py: 4 }}  >
        
        <Grid item xs={12} md={5} sx={{ bgcolor: "#8B13FD", borderRadius: '1rem', p: 4, boxShadow: 3 }}>
          <Grid container spacing={2} >
          <Grid item xs={12} >
              <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: '#fff', fontFamily: 'inherit', fontWeight: 'bold' }} >
                Google
              </Typography>
            </Grid>
            <Grid item md={4} xs={6} >
              <SkillCard
                image={seo}
                title='SEO'
              />
            </Grid>
            <Grid item md={4} xs={6} >
              <SkillCard
                image={adsense}
                title='Adsense'
              />
            </Grid>
            <Grid item md={4} xs={6} >
              <SkillCard
                image={gsc}
                title='Web Master'
              />
            </Grid>
            <Grid item md={4} xs={6} >
              <SkillCard
                image={admob}
                title='Admob'
              />
            </Grid>
            <Grid item md={4} xs={6} >
              <SkillCard
                image={firebase}
                title='Firebase'
              />
            </Grid>
         



          </Grid>
        </Grid>
        <Grid item xs={12} md={7} sx={{p:4}} >
          <img src={google} height='100%' width='100%' />

        </Grid>
      </Grid>




      {/* =========== Google SKILLS ENDED ========== */}
     
     
      
      </Grid>
    </>
  )
}
