import { Button } from '@mui/material'
import React from 'react'

export default function MuiButton(props) {
    const {text, sx} = props
  return (
    <Button variant="text" sx={{textTransform: 'capitalize', fontSize: '1rem', color: "#fff", fontWeight:'bold', ...sx}}>{text}</Button>
  )
}
