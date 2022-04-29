import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navitem(props) {

    // whne hover should hide icon

    // and show title

    const [showTitle, setShowTitle] = useState(false);

    function onHoverIcon(){
        console.log('hovering');

        setShowTitle(true)

    }

    function onLeaveIcon(){
        setShowTitle(false);
        console.log('leaving');
    }


    
  return (

    <NavLink exact="true" activeclassname="active" to={props.to}>

        <span onMouseLeave={onLeaveIcon}
            onMouseOver={onHoverIcon} >
            {!showTitle && (
                
                <FontAwesomeIcon 
                    style={{
                        transition: 'all 0.3s ease-out'
                    }}
                    icon={props.icon} color={props.color} 
                />
            )}
            {showTitle && (
                <span>{props.title}</span>
            )}
        </span>

    </NavLink>
  )
}
