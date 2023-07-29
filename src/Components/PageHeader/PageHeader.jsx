import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
export default function PageHeader(props) {
    const { heading } = props
    return (
        <Card elevation={0} sx={{borderBottom:'1px solid #a242fd', borderRadius: 0, mt:8}}> 
            <CardContent>

                <Typography variant="h4" component="div" textAlign='center' sx={{fontFamily: 'helvetica', fontWeight: 'bold', color: '#8B13FD'}}>
                    {heading}
                </Typography>

            </CardContent>

        </Card>
    )
}
