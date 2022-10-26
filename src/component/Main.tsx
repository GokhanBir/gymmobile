import React from 'react';
import { Header } from '../component/Header';
import { Footer } from '../component/Footer';
import { Content } from '../component/Content';
import { motion } from 'framer-motion';


const variant={
    hidden:{opacity:0.1},
    visible:{
        opacity:1,
        transition:{
            ease:"circIn",
            duration:1.5
        }}
}


export const Main = () => {
    return (
        <motion.div
        variants={variant}
        initial="hidden"
        animate="visible"
        >
            <Header />
            <Content />
            <Footer />
        </motion.div>
    )
}
