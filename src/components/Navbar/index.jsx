import { faHome, faUser, faEnvelope, faDisplay } from '@fortawesome/free-solid-svg-icons'
import './index.scss'
import Navitem from './Navitem'

export default function Navbar (){

    const navItems = [
        {
            to: '/',
            icon: faHome,
            title: 'HOME',
            color: "rgb(222, 110, 110)"
        },
        {
            to: '/about',
            icon: faUser,
            title: 'ABOUT',
            color: "#000" 
        },
        {
            to: '/projects',
            icon: faDisplay,
            title: 'WORK',
            color: "#000" 
        },
        {
            to: '/contact',
            icon: faEnvelope,
            title: 'CONTACT ME',
            color: "#000" 
        },
    ]




    return (
        <nav className='navbar'>
            {navItems.map((item) => {
                return (
                    <Navitem 
                        key={item.title}
                        to={item.to} 
                        color={item.color} 
                        title={item.title} 
                        icon={item.icon}
                        />
                    // add logic here for rendering navbar of mobileView when the maxwidth 570px
                )
            })}
        </nav>

    )
}

