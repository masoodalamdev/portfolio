import React from 'react'
import html from '../../Assets/Images/skills/html.png'
import css from '../../Assets/Images/skills/css.png'
import javascript from '../../Assets/Images/skills/javascript.png'
import react from '../../Assets/Images/skills/reactjs.png'
import nodejs from '../../Assets/Images/skills/node.png'
import express from '../../Assets/Images/skills/express.png'
import firebase from '../../Assets/Images/skills/firebase.png'
import mongodb from '../../Assets/Images/skills/mongodb.png'
import bootstrap from '../../Assets/Images/skills/bootstrap.png'
import adsense from '../../Assets/Images/skills/adsense.png'
import admob from '../../Assets/Images/skills/admob.png'
import wordpress from '../../Assets/Images/skills/wordpress.png'
import blogger from '../../Assets/Images/skills/blogger.png'
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { NoteRounded } from '@mui/icons-material'


export default function Skills() {
  return (
    <>


      <Grid container spacing={4} sx={{p:4}}>
      <Grid item xs={12}>

      <Typography variant="h4" gutterBottom sx={{textAlign: 'center', color: '#444'}}>
     Skills
    </Typography>
    <br/>
      <Typography variant="h5" gutterBottom sx={{textAlign: 'center', color: '#444'}}>
     My Top Skills
    </Typography>
    <br/>
      </Grid>
     
        <Grid item md={3} xs={6}>
          <Card >
            <CardMedia
              component="img"
              height="150"
              image={html}
              alt="blog image"
              sx={{objectFit: 'contain'}}
            />
            <CardHeader

              title={'HTML5'}
              // subheader={'Download Latest Software for Windows & android'}
              sx={{textAlign: 'center'}}
            />

          </Card>
        </Grid>
        <Grid item md={3} xs={6}>
          <Card >
            <CardMedia
              component="img"
              height="150"
              image={css}
              alt="blog image"
              sx={{objectFit: 'contain'}}
            />
            <CardHeader

              title={'CSS3'}
              // subheader={'Download Latest Software for Windows & android'}
              sx={{textAlign: 'center'}}
            />

          </Card>
        </Grid>
        <Grid item md={3} xs={6}>
          <Card >
            <CardMedia
              component="img"
              height="150"
              image={javascript}
              alt="blog image"
              sx={{objectFit: 'contain'}}
            />
            <CardHeader

              title={'JavaScript'}
              // subheader={'Download Latest Software for Windows & android'}
              sx={{textAlign: 'center'}}
            />

          </Card>
        </Grid>
        <Grid item md={3} xs={6}>
          <Card >
            <CardMedia
              component="img"
              height="150"
              image={react}
              alt="blog image"
              sx={{objectFit: 'contain'}}
            />
            <CardHeader

              title={'React JS'}
              // subheader={'Download Latest Software for Windows & android'}
              sx={{textAlign: 'center'}}
            />

          </Card>
        </Grid>
        <Grid item md={3} xs={6}>
          <Card >
            <CardMedia
              component="img"
              height="150"
              image={nodejs}
              alt="blog image"
              sx={{objectFit: 'contain'}}
            />
            <CardHeader

              title={'Node JS'}
              // subheader={'Download Latest Software for Windows & android'}
              sx={{textAlign: 'center'}}
            />

          </Card>
        </Grid>
        <Grid item md={3} xs={6}>
          <Card >
            <CardMedia
              component="img"
              height="150"
              image={express}
              alt="blog image"
              sx={{objectFit: 'contain'}}
            />
            <CardHeader

              title={'Express JS'}
              // subheader={'Download Latest Software for Windows & android'}
              sx={{textAlign: 'center'}}
            />

          </Card>
        </Grid>
        <Grid item md={3} xs={6}>
          <Card >
            <CardMedia
              component="img"
              height="150"
              image={mongodb}
              alt="blog image"
              sx={{objectFit: 'contain'}}
            />
            <CardHeader

              title={'Mongo DB'}
              // subheader={'Download Latest Software for Windows & android'}
              sx={{textAlign: 'center'}}
            />

          </Card>
        </Grid>
        <Grid item md={3} xs={6}>
          <Card >
            <CardMedia
              component="img"
              height="150"
              image={bootstrap}
              alt="blog image"
              sx={{objectFit: 'contain'}}
            />
            <CardHeader

              title={'Bootstrap'}
              // subheader={'Download Latest Software for Windows & android'}
              sx={{textAlign: 'center'}}
            />

          </Card>
        </Grid>
        <Grid item md={3} xs={6}>
          <Card >
            <CardMedia
              component="img"
              height="150"
              image={wordpress}
              alt="blog image"
              sx={{objectFit: 'contain'}}
            />
            <CardHeader

              title={'Wordpress'}
              // subheader={'Download Latest Software for Windows & android'}
              sx={{textAlign: 'center'}}
            />

          </Card>
        </Grid>
        <Grid item md={3} xs={6}>
          <Card >
            <CardMedia
              component="img"
              height="150"
              image={adsense}
              alt="blog image"
              sx={{objectFit: 'contain'}}
            />
            <CardHeader

              title={'Google Adsense'}
              // subheader={'Download Latest Software for Windows & android'}
              sx={{textAlign: 'center'}}
            />

          </Card>
        </Grid>
        <Grid item md={3} xs={6}>
          <Card >
            <CardMedia
              component="img"
              height="150"
              image={admob}
              alt="blog image"
              sx={{objectFit: 'contain'}}
            />
            <CardHeader

              title={'Google Admob'}
              // subheader={'Download Latest Software for Windows & android'}
              sx={{textAlign: 'center'}}
            />

          </Card>
        </Grid>
        <Grid item md={3} xs={6}>
          <Card >
            <CardMedia
              component="img"
              height="150"
              image={firebase}
              alt="blog image"
              sx={{objectFit: 'contain'}}
            />
            <CardHeader

              title={'Google Firebase'}
              // subheader={'Download Latest Software for Windows & android'}
              sx={{textAlign: 'center'}}
            />

          </Card>
        </Grid>
        <Grid item md={3} xs={6}>
          <Card >
            <CardMedia
              component="img"
              height="150"
              image={blogger}
              alt="blog image"
              sx={{objectFit: 'contain'}}
            />
            <CardHeader

              title={'Blogger'}
              // subheader={'Download Latest Software for Windows & android'}
              sx={{textAlign: 'center'}}
            />

          </Card>
        </Grid>
     
        

   
    
      



      </Grid>
    

      </>
  )
}
