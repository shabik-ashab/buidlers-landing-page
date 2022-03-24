import { Container,Box, Button } from "@mui/material";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import React from 'react'

const Star = () => {
  return (
   <Container  sx={{minHeight:'90vh'}}>
        <Box   display="flex" sx={{ justifyContent: 'center', }} >
        <Box width="460px" display="flex"  sx={{ justifyContent: 'space-between',flexWrap: 'wrap' }}  >
          <Box  textAlign='center' maxWidth="200px">
          <Box display="flex" sx={{ justifyContent: 'center',}}>
            <StarRoundedIcon style={{color:'#333333'}} className="icon" />
             </Box>  
             <Box sx={{lineHeight:'.8em'}}>
           <p style={{fontSize:'2em'}}>320 startup</p>
            <p style={{fontSize:'2em'}}>pitches</p>
           </Box>
           <Box display="flex" sx={{ justifyContent: 'center',}}>
           <div style={{width:'70px',border:'1px solid black'}}></div>
           </Box>
           
          </Box>
          <Box  textAlign='center' maxWidth="200px">
          <Box display="flex" sx={{ justifyContent: 'center',}}>
            <StarRoundedIcon style={{color:'#333333'}} className="icon" />
             </Box>  
           <Box sx={{lineHeight:'.8em'}}>
           <p style={{fontSize:'2em'}}>9 startups</p>
            <p style={{fontSize:'2em'}}>selected</p>
           </Box>
           <Box display="flex" sx={{ justifyContent: 'center',}}>
           <div style={{width:'70px',border:'1px solid black'}}></div>
           </Box>
          </Box>
        </Box>
        </Box>
        <Box  display="flex" sx={{ justifyContent: 'center',mt:10}} >
        <Box  textAlign='center' maxWidth="200px">
          <Box display="flex" sx={{ justifyContent: 'center',}}>
            <StarRoundedIcon style={{color:'#333333'}} className="icon" />
             </Box>  
           <Box sx={{lineHeight:'.8em'}}>
            <p style={{fontSize:'2em'}}>150 investors</p>
           </Box>
           <Box display="flex" sx={{ justifyContent: 'center',}}>
           <div style={{width:'160px',border:'1px solid black'}}></div>
           </Box>
          </Box>
        </Box>
   </Container>
  )
}

export default Star