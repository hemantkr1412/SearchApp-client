import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Button } from '@mui/material';


export default function CardFormat(props) {
  const [expanded, setExpanded] = React.useState(false);

  console.log(props.data.add[0].imageUrl);


  return (

  
    <Card 
      sx={{ width: 500, height: 400, margin: 2, display: 'inline-block' }}
    >
      <CardHeader
        title={props.data.add[0].name}
        subheader={props.data.add[0].headline}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.data.add[0].imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.data.add[0].description}
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        color="primary"

      >
        {props.data.add[0].CTA}
      </Button>
    </Card>
  );
}

