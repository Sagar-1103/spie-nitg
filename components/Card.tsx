import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
// import Nitgoa from "../public/nitg.png";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import NavigationIcon from '@mui/icons-material/Navigation';


export default function MediaCard({filename}:any) {
  // console.log(filename);
  return (
    <div>
    <Card sx={{ maxWidth: 150,maxHeight:300 }}>
      {/* <CardMedia
        sx={{ height: 140 }}
        image="../public/nitg.png"
        title="green iguana"
    /> */}
    
      <CardContent>
      <Image src={`http://localhost:3000/api/uploadsCommittiesImages/${filename}`} alt="President" width={200} height={200}/>
        <Typography gutterBottom variant="h6" component="div">
          Member
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sagar Shirgaonkar
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