import {RiReactjsLine} from "react-icons/ri"
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaVuejs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { SiNuxtdotjs } from "react-icons/si";
import { motion } from "framer-motion"
import { transaction } from "mobx"

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y:[10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1}} className="my-20 text-center text-4xl">Tech Stack</motion.h1>
        <motion.div whileInView={{opacity:1, x:0}} initial= {{opacity:0, x:-100}} transition={{duration: 1}} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial = "intial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-600 p-4">
                <RiReactjsLine className ="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1.25)}
            initial = "intial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-600 p-4">
                <SiMongodb className ="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1.75)}
            initial = "intial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-600 p-4">
                <FaNodeJs className ="text-7xl text-green-600"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1)}
            initial = "intial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-600 p-4">
                <FaDocker className ="text-7xl text-cyan-600"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial = "intial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-600 p-4">
                <BiLogoPostgresql className ="text-7xl text-sky-700"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1.8)}
            initial = "intial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-600 p-4">
                <SiPrisma className ="text-7xl text-sky-100"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1.75)}
            initial = "intial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-600 p-4">
                <FaVuejs className ="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.1)}
            initial = "intial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-600 p-4">
                <SiNuxtdotjs className ="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1.33)}
            initial = "intial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-600 p-4">
                <FaGolang className ="text-7xl text-cyan-500"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
