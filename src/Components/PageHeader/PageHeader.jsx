import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
export default function PageHeader(props) {
    const { heading } = props
    return (
        <Card elevation={0} sx={{borderBottom:'1px solid #6e45e2', borderRadius: 0, mt:8}}> 
            <CardContent>

                <Typography variant="h4" component="div" textAlign='center' sx={{fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', color: '#6e45e2'}}>
                    {heading}
                </Typography>

            </CardContent>

        </Card>
    )
}
