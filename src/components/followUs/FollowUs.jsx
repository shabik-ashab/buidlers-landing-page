import { Box, Container, Grid } from "@mui/material";
import React from "react";
import twitter from '../../images/twitter.png';
import discord from '../../images/discord.webp'

const FollowUs = () => {
  return (
    <Container sx={{minHeight:'80vh'}}>
      <Grid container spacing={4}>
        <Grid item md={4} xs={12}>
        <Box >
            <h5 style={{fontSize:'1.1em'}} >Follow us</h5>
            <div>
                <img src={twitter} />
            </div>
            <Box sx={{fontSize:'1.2em',lineHeight:'.5em',mt:13}}>
            <h5 style={{}} >Startup/Investor Form</h5>
            <p>Get feedback from someone at</p>
            <p>BuidlersTribe.</p>
            </Box>
        </Box>
        </Grid>
        <Grid item md={4} xs={12}>
            <Box textAlign='center' sx={{mt:34}} >
            <h2>Buidl Daily</h2>
            <div style={{border:'1.5px solid #baa049',marginLeft:'40px'}} className="input-box">
            <input placeholder="Type Your Email" />
            <button>Subscribe</button>
            </div>
            
            </Box>     
        </Grid>
        <Grid item md={4} xs={12}>
            <Box  display="flex" sx={{ justifyContent: 'center', }} >
                <img src={discord} />
            </Box>
        </Grid>
      </Grid>
      <Box sx={{mt:8,}}>
      <hr style={{border:'1px solid black'}} />
      <Box sx={{mt:4,mb:8}}>
      <span className="footer-logo">BUIDLERS TRIBE</span>
      </Box>
      
      </Box>
      
    </Container>
  );
};

export default FollowUs;
