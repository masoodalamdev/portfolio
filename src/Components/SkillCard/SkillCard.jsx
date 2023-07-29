import { Card, CardHeader, CardMedia } from '@mui/material'
import React from 'react'

export default function SkillCard(props) {
    const {image, title} = props
  return (
    <Card sx={{ minHeight: '125px', maxHeight: '125px', borderRadius: '1rem', p:2  }} elevation={0} >
    <CardMedia
      component="img"
      height="75"
      image={image}
      alt="blog image"
      sx={{ objectFit: 'contain', }}
    />
    <CardHeader

      title={title}
      titleTypographyProps={{variant:'body', p:0}}
      // subheader={'Download Latest Software for Windows & android'}
      sx={{ textAlign: 'center', p:0 }}
    />

  </Card>
  )
}
