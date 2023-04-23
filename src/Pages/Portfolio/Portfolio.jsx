import { Box, Card, CardContent, Chip, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import softwarenapps from '../../Assets/Images/portfolio/softwarenapps.png'
import pakistaneservices from '../../Assets/Images/portfolio/pakistaneservices.png'
import fxcryptospot from '../../Assets/Images/portfolio/fxcryptospot.png'
import modernfashiongirl from '../../Assets/Images/portfolio/modernfashiongirl.png'
import pakeservicesapp from '../../Assets/Images/portfolio/pakeservicesapp.png'
import omniteknologies from '../../Assets/Images/portfolio/omniteknologies.png'



export default function Portfolio() {
  return (
    <>
      <Grid container spacing={4} sx={{p:2}}>
      <Grid item xs={12}>

      <Typography variant="h4" gutterBottom sx={{textAlign: 'center', color: '#444'}}>
     Portfolio
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
              subheader={'Download Latest Software for Windows & Android'}
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
              subheader={'Developer Portfolio'}
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
              title={'Pakistan E-Services App'}
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
