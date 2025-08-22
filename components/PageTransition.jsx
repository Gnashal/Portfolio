// "use client";
// import { usePathname } from "next/navigation";
// import { AnimatePresence, motion } from "framer-motion";

// function PageTransition({ children }) {
//   const pathname = usePathname();

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={pathname} // This triggers the animation on route change!
//         initial={{ opacity: 1}}
//         animate={{ opacity: 0, transition: {
//             delay: 1, duration: 0.6, ease: "easeInOut"
//         }}}
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// export default PageTransition;

"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion} from "framer-motion";


function PageTranstition({children}) {
    const pathname = usePathname();
    return(
        <AnimatePresence>
            <div key={pathname}>
                <motion.div 
                initial={{opacity: 1}}
                animate={{opacity: 0, 
                    transition:{
                        delay: 1, duration: 0.4, ease: "easeInOut"
                    }, 

                }}
                className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                />
            {children}
            </div>
        </AnimatePresence>
    )
}
export default PageTranstition;