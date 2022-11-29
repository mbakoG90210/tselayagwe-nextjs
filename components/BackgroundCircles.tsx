import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({ }: Props) {
    return (
        <motion.div className="relative flex justify-center items-center"
            initial={{ opacity: 0, }}
            animate={{ scale: [1, 2, 2, 3, 1], opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0], borderRadius: ["20%", "20%", "50%", "80%", "20%"], }}
            transition={{ duration: 3, }}>
            <div className="absolute border border-[#6C1313] rounded-full h-[200px] w-[200px] animate-ping" />
            <div className="absolute border border-[#6C1313] rounded-full h-[300px] w-[300px]" />
            <div className="absolute border border-[#fff] opacity-20 rounded-full h-[500px] w-[500px]" />
            <div className="absolute border border-[#E4A951] rounded-full h-[650px] w-[650px]  animate-pulse" />
            <div className="absolute border border-[#6C1313] opacity-20 rounded-full h-[800px] w-[800px]" />
        </motion.div>
    )
}

export default BackgroundCircles