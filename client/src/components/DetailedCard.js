import React from 'react';
import {
    Box,
    Grid,
    Container,
    Button,
    LinearProgress,
    Card,
    Chip,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
    CardActions
  } from '@mui/material';


export default function DetailedCard(){

    return(
    <div className="App">
    {/* // THE GRID COMP */}
        <Box data-testid="grid-container" sx={{ flexGrow: 1, paddingBottom: 8 }}>
            <Grid container spacing={3}>
                {/* PROPS USED FOR POST CARD: title, imgUrl, releaseDate */}
                <CardMedia
                  component="img"
                  alt={"oops, didn't load"}
                  image={"https://cdn.vox-cdn.com/thumbor/EEi-oM8bN6jQ0TOAfGPGPJI4SlY=/0x0:5184x3456/1820x1213/filters:focal(2178x1314:3006x2142):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70264689/AZ4I5423.0.jpg"}
              />


            </Grid>
        </Box>
    {/* //FOOTER COMP */}
    <hr></hr>
  </div>

//     return(
//       <div style= {{margin: 50}}>

//         <Card sx={{maxWidth: '10',}}>
//          <CardContent sx={{backgroundColor: "#ddd"}}>
//             <Grid>
//                 <CardMedia
//                     component="img"
//                     alt={"oops, didn't load"}
//                     image={"https://cdn.vox-cdn.com/thumbor/EEi-oM8bN6jQ0TOAfGPGPJI4SlY=/0x0:5184x3456/1820x1213/filters:focal(2178x1314:3006x2142):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70264689/AZ4I5423.0.jpg"}
//                 />
//             </Grid>
//          </CardContent>
//         </Card>
//     </div>
    );
  }

