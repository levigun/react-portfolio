import React from 'react'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Footer() {
  return (
    <>
        <div>
            <a href="https://www.linkedin.com/in/theresa-levina-gunawan-830b88225?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZhV6FdsbRImWwhxvJ4YMKw%3D%3D" rel="noopenner noreferrer" target="_blank">
                <button className="btn btn-contact">
                    <FontAwesomeIcon icon={faLinkedin}/>

                </button>
            </a>
            <a href="https://github.com/levigun" target="_blank" rel="noreferrer">
                <button className="btn btn-contact">
                    <FontAwesomeIcon icon={faGithubSquare}/>
                </button>
            </a>

        </div>
        <div className='footer'>
            <h3 className='py-1' style={{fontSize: '22px'}}>
                &copy;2021 Theresa Levina Gunawan.
            </h3>
        </div>
    </>
  )
}
