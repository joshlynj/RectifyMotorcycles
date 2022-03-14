import React from 'react';

//Grid

import { styled } from '@mui/material/styles';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea
} from '@mui/material';

export default function CardTiles(){
return(
    <Card className="postcard" sx={{
        maxWidth: 400,
        minHeight: 450,
        backgroundColor: "#ddd"
     }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="220"
                image={"https://cdn.vox-cdn.com/thumbor/EEi-oM8bN6jQ0TOAfGPGPJI4SlY=/0x0:5184x3456/1820x1213/filters:focal(2178x1314:3006x2142):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70264689/AZ4I5423.0.jpg"}
                alt="error loading"
            />
            <CardContent >
                <Typography  sx={{fontFamily: "monospace"}} data-testid="img-title" gutterBottom variant="h5" maxHeight="300" >
                    <h5>Project 1</h5>
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);
}

// Postcard.defaultProps = {
// title: 'Space is hard',
// shortDescription: 'We are having issues loading this content. Please try again later.',
// imgUrl: 'https://media.gettyimages.com/photos/image-of-an-astronaut-and-a-space-shuttle-in-space-low-angle-view-picture-id79337786'
// }

    // <div className="App">
    //   {/* // THE GRID COMP */}
    //   <hr></hr>
    //     <h3>Previous Projects</h3>
    //       <Box data-testid="grid-container" sx={{ flexGrow: 1, paddingTop: 8, paddingBottom: 8 }}>
    //           <Grid container spacing={3}>
    //               {/* PROPS USED FOR POST CARD: title, imgUrl, releaseDate */}
    //               <CardMedia
    //                 component="img"
    //                 alt={"oops, didn't load"}
    //                 image={"https://cdn.vox-cdn.com/thumbor/EEi-oM8bN6jQ0TOAfGPGPJI4SlY=/0x0:5184x3456/1820x1213/filters:focal(2178x1314:3006x2142):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70264689/AZ4I5423.0.jpg"}
    //             />


    //           </Grid>
    //       </Box>
    //   {/* //FOOTER COMP */}
    //   <hr></hr>
    // </div>


//   );
// }