"use client";

import { motion } from "framer-motion";

function Contact() {
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
        }}>
            <div>
                contact page
            </div>
        </motion.div>
    )
}
export default Contact;