import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Nitgoa from "../public/nitg.png";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';


export default function MediaCard() {
  return (
    <div>
        
    <Card sx={{ maxWidth: 150 }}>
      {/* <CardMedia
        sx={{ height: 140 }}
        image="../public/nitg.png"
        title="green iguana"
    /> */}
    
      <Image src={Nitgoa} alt="President" width={100} height={100}/>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          President
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Maaz Ali
        </Typography>
      </CardContent>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size='small' className='relative' color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
    </Box>
    </Card>
    </div>
  );
}