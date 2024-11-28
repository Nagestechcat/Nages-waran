import {RiReactjsLine} from 'react-icons/ri'
import { SiNestjs,SiPhp } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import {motion} from 'framer-motion'
const iconVariants = (duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }
})
const Technologies = () =>{
    return(
        <div className="pb-24">
            <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div whileInView={{opacity:1,x:0}}  initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                    initial="initial" 
                    animate="animate" 
                    variants={iconVariants(2.5)}>
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div >
                <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className='p-4'>
                    <SiNestjs className="text-7xl text-red-700"/>
                </motion.div>
                <motion.div className='p-4' initial="initial" animate="animate" variants={iconVariants(5)}>
                    <DiMongodb className="text-7xl text-green-500"/>
                </motion.div>
                <motion.div className='p-4' initial="initial" animate="animate" variants={iconVariants(2)}>
                    <BiLogoPostgresql className="text-7xl text-cyan-700"/>
                </motion.div>
                <motion.div className='p-4' initial="initial" animate="animate" variants={iconVariants(6)}>
                    <SiPhp className="text-7xl text-white"/>
                </motion.div>
                <motion.div className='p-4' initial="initial" animate="animate" variants={iconVariants(4)}>
                    <FaNodeJs className="text-7xl text-green-400"/>
                </motion.div>
            </motion.div>
        </div>
    )
}
export default Technologies