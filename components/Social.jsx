import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>, path:"https://github.com/Mirxa-Rafay-25" },
    {icon: <FaInstagram/>, path:"https://www.instagram.com/mirza_rafay_25/" },
    {icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/muhammadrafay25/" },
    {icon: <FaFacebookF/>, path:"https://www.facebook.com/mirxarafay.rafay" },
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        })}
    </div>
  )
}

export default Social