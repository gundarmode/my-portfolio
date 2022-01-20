import React, {useState} from 'react';
import { MainTitleStyled } from '../assets/styles/LandingStyles';
import {motion} from "framer-motion"

const Landing = () => {



  return  <>
	<MainTitleStyled>
        <motion.div initial={{opacity:0, translateY:-100}} animate={{opacity:1, translateY:0}} transition={{duration:1, delay:1}}>A</motion.div>
        <motion.div initial={{opacity:0, translateY:-100}} animate={{opacity:1, translateY:0}} transition={{duration:1, delay:1.2}}>B</motion.div>
        <motion.div initial={{opacity:0, translateY:-100}} animate={{opacity:1, translateY:0}} transition={{duration:1, delay:1.4}}>D</motion.div>
        <motion.div initial={{opacity:0, translateY:-100}} animate={{opacity:1, translateY:0}} transition={{duration:1, delay:1.6}}>U</motion.div>
        <motion.div initial={{opacity:0, translateY:-100}} animate={{opacity:1, translateY:0}} transition={{duration:1, delay:1.8}}>L</motion.div>
        <motion.div initial={{opacity:0, translateY:-100}} animate={{opacity:1, translateY:0}} transition={{duration:1, delay:2}} class="surname-start">H</motion.div>
        <motion.div initial={{opacity:0, translateY:-100}} animate={{opacity:1, translateY:0}} transition={{duration:1, delay:2.2}}>Y</motion.div>
        <motion.div initial={{opacity:0, translateY:-100}} animate={{opacity:1, translateY:0}} transition={{duration:1, delay:2.4}}>E</motion.div>
		
		
	</MainTitleStyled>
  </>
 
};

export default Landing;
