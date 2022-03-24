import React from 'react'
import { Container,Box, Button } from "@mui/material";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import './banner.css'

const Banner = () => {
  return (
    <Container sx={{height:'100vh'}}>
        <Box textAlign='center' sx={{backgroundColor:'',lineHeight:'6em'}}>
            <div style={{fontSize:'3em'}}>Get access to the best <br /> investors and VCs in web3</div>
            <div  style={{justifyContent:'center',display:'flex'}}>
            <div style={{backgroundColor:'black',width:'40px',height:'2.4px'}}></div>
            </div>
           
        </Box>
        <Box style={{fontSize:'1.2em'}} textAlign='center'>
        <p>Be a part of a high-trust network of buidlers.</p>
        <p style={{marginTop:'60px'}}>Work with over 100 functional experts who work with you in</p>
        <p>exchange for a small allocation.</p>
        <Button className="btn" sx={{
          border:'2px solid black',borderRadius:'0',backgroundColor:'black',
          color:'white',px:'5vh',py:'3vh',mt:2,fonstSize:'2rem',

          }}>Read what buidlers have to say about us!</Button>
          <p >Are you a buidlers ?</p>
        </Box>
    </Container>
  )
}

export default Banner