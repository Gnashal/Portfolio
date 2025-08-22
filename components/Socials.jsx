import Link from "next/link"; 

import {FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
    {icons: <FaGithub />, path: 'https://github.com/Gnashal/'},
    {icons: <FaLinkedin />, path: 'https://www.linkedin.com/in/yousif-ceballos-756b77366/'},
    {icons: <FaFacebook />, path: 'https://www.facebook.com/yousif.ceballos'},
    {icons: <FaInstagram />, path: 'https://www.instagram.com/yowsep_/'},
]

function Socials({containerStyles, iconStyles}) {
    return(
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return(
                    <Link key={index} href={item.path} className={iconStyles}  >
                        {item.icons}
                    </Link>
                )
            })}
        </div>
    )
}
export default Socials;