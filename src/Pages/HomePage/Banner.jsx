import { easeOut } from "motion";
import { motion } from "motion/react"
import team1 from '../../assets/team/team1.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                        animate={{ y: 50}}
                        transition={{duration:2,delay:1,repeat:Infinity}}
                        src={team1}
                        className="max-w-sm rounded-lg shadow-2xl" />
               </div>
                <div className="flex-1">
                    <motion.h1
                        
                        animate={{ x: 50 }}
                        transition={{duration:2,delay:1,ease:easeOut,repeat:Infinity}}
                        className="text-5xl flex gap-1 font-bold">Latest job <motion.p animate={{ color: ['#ff9333', '#b8ff33', '#3396ff '] }} transition={{duration:2,delay:1,repeat:Infinity}} >news</motion.p>for you!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;