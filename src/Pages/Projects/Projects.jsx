import { Box, Card, CardContent, Chip, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import softwarenapps from '../../Assets/Images/projects/softwarenapps.png'
import pakistaneservices from '../../Assets/Images/projects/pakistaneservices.png'
import fxcryptospot from '../../Assets/Images/projects/fxcryptospot.png'
import modernfashiongirl from '../../Assets/Images/projects/modernfashiongirl.png'
import pakeservicesapp from '../../Assets/Images/projects/pakeservicesapp.png'
import omniteknologies from '../../Assets/Images/projects/omniteknologies.png'



export default function projects() {
  return (
    <>
      <Grid container spacing={4} sx={{p:4}}>
      <Grid item xs={12}>

      <Typography variant="h4" gutterBottom sx={{textAlign: 'center', color: '#444'}}>
     Projects
    </Typography>
    <br/>
      <Typography variant="h5" gutterBottom sx={{textAlign: 'center', color: '#444'}}>
     some of my latest works
    </Typography>
    <br/>
      </Grid>
     
        <Grid item md={4} xs={6} >
          <Card>
            <CardMedia
              component="img"
              height="350"
              image={softwarenapps}
              alt="blog image"
            />
            <CardHeader
              title={'SoftwarenApps'}
              subheader={'Software for Windows & Android'}
              sx={{textAlign: 'center', color: '#1976d2', p:1}}
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  
                }}
              ><Stack direction="row" spacing={1} sx={{justifyContent: 'center'}} >

                <Chip color="primary" size="small" label="Blogger" variant='outlined' />
              </Stack>

              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item  md={4} xs={6} >
          <Card>
            <CardMedia
              component="img"
              height="350"
              image={fxcryptospot}
              alt="blog image"
            />
            <CardHeader
              title={'Forex Crypto Spot'}
              subheader={'Crypto Currency Blog'}
              sx={{textAlign: 'center', color: '#1976d2', p:1}}
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  
                }}
              ><Stack direction="row" spacing={1} sx={{justifyContent: 'center'}} >

                <Chip color="primary" size="small" label="Wordpress" variant='outlined' />
              </Stack>

              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item  md={4} xs={6} >
          <Card>
            <CardMedia
              component="img"
              height="350"
              image={modernfashiongirl}
              alt="blog image"
            />
            <CardHeader
              title={'Modern Fashion Girl'}
              subheader={'Amazon Affiliate Blog'}
              sx={{textAlign: 'center', color: '#1976d2', p:1}}
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  
                }}
              ><Stack direction="row" spacing={1} sx={{justifyContent: 'center'}} >

                <Chip color="primary" size="small" label="Blogger" variant='outlined' />
                <Chip color="primary" size="small" label="Amazon Affiliate" variant='outlined' />
              </Stack>

              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} xs={6} >
          <Card>
            <CardMedia
              component="img"
              height="350"
              image={pakistaneservices}
              alt="blog image"
            />
            <CardHeader
              title={'Pakistan E-Services'}
              subheader={'Online Services in Pakistan'}
              sx={{textAlign: 'center', color: '#1976d2', p:1}}
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  
                }}
              ><Stack direction="row" spacing={1} sx={{justifyContent: 'center'}} >

                <Chip color="primary" size="small" label="Blogger" variant='outlined' />
              </Stack>

              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item  md={4} xs={6} >
          <Card>
            <CardMedia
              component="img"
              height="350"
              image={omniteknologies}
              alt="blog image"
            />
            <CardHeader
              title={'Omni Teknologies'}
              subheader={'Developer projects'}
              sx={{textAlign: 'center', color: '#1976d2', p:1}}
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  
                }}
              ><Stack direction="row" spacing={1} sx={{justifyContent: 'center'}} >

                <Chip color="primary" size="small" label="Wordpress" variant='outlined' />
              </Stack>

              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} xs={6} >
          <Card>
            <CardMedia
              component="img"
              height="350"
              image={pakeservicesapp}
              alt="blog image"
            />
            <CardHeader
              title={'Pak E-Services App'}
              subheader={'Online Services in Pakistan'}
              sx={{textAlign: 'center', color: '#1976d2', p:1}}
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  
                }}
              ><Stack direction="row" spacing={1} sx={{justifyContent: 'center'}} >

                <Chip color="primary" size="small" label="Java" variant='outlined' />
                <Chip color="primary" size="small" label="Webview" variant='outlined' />
              </Stack>

              </Typography>
            </CardContent>
          </Card>
        </Grid>







      </Grid>

    </>
  )
}
