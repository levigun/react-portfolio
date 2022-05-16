import { faHome, faUser, faEnvelope, faDisplay } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useRoutes } from 'react-router-dom'
import './index.scss'
import Navitem from './Navitem'

export default function Navbar (){

    const route = useLocation()

    function renderlinkColour(link){

        return function(){

            // if link is the same as current page then
            console.log(route);
            if(route.pathname === link){
                return 'rgb(222, 110, 110)'
            } else {
                return '#000'
            }
            // give red
    
            // else black
        }



    }

    const navItems = [
        {
            to: '/',
            icon: faHome,
            title: 'HOME',
            color: renderlinkColour('/')
        },
        {
            to: '/about',
            icon: faUser,
            title: 'ABOUT',
            color: renderlinkColour("/about") 
        },
        {
            to: '/projects',
            icon: faDisplay,
            title: 'WORK',
            color: renderlinkColour("/projects")
        },
        {
            to: '/contact',
            icon: faEnvelope,
            title: 'CONTACT ME',
            color: renderlinkColour("/contact") 
        },
    ]




    return (
        <nav className='navbar'>
            {navItems.map((item) => {
                return (
                    <Navitem 
                        key={item.title}
                        to={item.to} 
                        color={item.color()} 
                        title={item.title} 
                        icon={item.icon}
                        />
                    // add logic here for rendering navbar of mobileView when the maxwidth 570px 
                )
            })}
        </nav>

    )
}

