import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Render.css"

const Render = ({ userdata }) => {
  return (
    <div className='container'>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={userdata.image_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {userdata.name}
            <br />
            <hr />
            Tagline: {userdata.tagline}
            <hr />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h3> Description:</h3> {userdata.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Render;
