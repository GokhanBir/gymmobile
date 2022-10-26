import React from 'react';
import { motion } from 'framer-motion';
import {useNavigate} from "react-router-dom";
import logo from "../img/logo.png";
import "../css/style.css";

export const Animation = () => {
    const navigate=useNavigate();


  return (
    <div className='container'>
        <motion.div className='imgContainer'
        animate={{rotateY:360}}
        transition={{ ease: "backInOut",duration: 2,repeat:1,repeatType:"reverse" }}
        onAnimationComplete={definition => {
            navigate("./main")
          }}
        
        >
        <img src={logo} style={{width:"250px",height:"250px"}} alt="" />
        </motion.div>
    </div>
  )
}




