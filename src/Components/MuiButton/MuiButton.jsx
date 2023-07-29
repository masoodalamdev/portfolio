import { Button } from '@mui/material'
import React from 'react'

export default function MuiButton(props) {
  const { text, href, sx } = props
  return (
    <Button variant="contained"
      href={href}
      sx={{
        textTransform: 'capitalize', bgcolor: '#6e45e2', color: "#fff", fontWeight: 'bold',
        '&:hover': { bgcolor: '#6e45e2', color: "#fff" }, ...sx
      }}
      disableElevation
    >
      {text}
    </Button>
  )
}
