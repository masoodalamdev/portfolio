import { Button } from '@mui/material'
import React from 'react'

export default function MuiButton(props) {
  const { text, href, sx } = props
  return (
    <Button variant="contained"
      href={href}
      sx={{
        textTransform: 'capitalize', bgcolor: '#8B13FD', color: "#fff", fontWeight: 'bold',
        '&:hover': { bgcolor: '#8B13FD', color: "#fff" }, ...sx
      }}
      disableElevation
    >
      {text}
    </Button>
  )
}
