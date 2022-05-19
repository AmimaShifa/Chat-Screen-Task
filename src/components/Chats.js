import React , { useState } from "react";
//import Screen from "./Screen";
import "./Chats.css";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
//import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
//import ArrowUpward from "@mui/icons-material/ArrowUpward";


const Chats=()=>{
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      function Random() {
       var result = Math.random().toString(36).substring(2,7);
        return result;
    }
    function generatemessage(e){
      e.preventDefault();
      count=0;
      function insertAfter(newNode, existingNode) {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
      }
      function insertBefore(newNode, existingNode) {
        existingNode.parentNode.insertBefore(newNode, existingNode);
    }
    
     
      const para = document.createElement("p");
      para.className="from-me";
      para.id="sendmsg"
var input = document.getElementById("userInput").value;
para.innerText = input;
var empty= document.getElementById("empty");
if(count===0){
  insertAfter(para,empty);
  var count=1;   
}
else{
insertAfter(para,reply);
count=1;}



const reply = document.createElement("p");
reply.className="from-them";
reply.id="recvmsg"
reply.innerHTML=Random();

insertAfter(reply,para);
empty=document.getElementById("recvmsg");
//document.getElementById("empty2").appendChild(reply);
document.getElementById("formmsg").reset();
    }
      
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
      const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      
      const card = (
        <React.Fragment>
          <CardContent>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                  </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 0, display: { xs: 'none', sm: 'block' } }}
                >
                  To:
                </Typography>
                <Search>
                  
                  <StyledInputBase
                    placeholder=""
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </Toolbar>
            </AppBar>
          </Box>
          <br />
          
     <div  class="imessage">
     <div id ="empty"></div>
    
		<form class="chat-input bottom" onsubmit="return false;  " id="formmsg">
			<input type="text" autocomplete="on" placeholder="Type a message" id="userInput" />
		<button className="arrow" onClick={generatemessage}>
    
    <bold className="arrow">{">"}</bold>
    </button>
		</form>
    
     </div>
     
          </CardContent>
          <CardActions>
           
          </CardActions>
        </React.Fragment>
      ); return(
<div >
    <div className="nav-bar"> 
    New Messages 
             </div>
             <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
             

</div>

    )
}


export default Chats;