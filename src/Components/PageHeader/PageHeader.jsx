import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
export default function PageHeader(props) {
    const { heading } = props
    return (
        <Card elevation={0} sx={{borderBottom:'1px solid #444', borderRadius: 0, mb: 4}}> 
            <CardContent>

                <Typography variant="h4" component="div" textAlign='center' sx={{fontFamily: 'helvetica', fontWeight: 'bold', color: '#444'}}>
                    {heading}
                </Typography>

            </CardContent>

        </Card>
    )
}
