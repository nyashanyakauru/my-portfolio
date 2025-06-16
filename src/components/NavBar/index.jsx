import React, { useState } from "react";
import {FaBars, FaDev} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {HiX} from 'react-icons/hi';
import './styles.scss';

const data = [
    {
        label : 'HOME',
        to : '/'
    },

     {
        label : 'ABOUT',
        to : '/About'
    },

     {
        label : 'SKILLS',
        to : '/Skills'
    },

     {
        label : 'RESUME',
        to : '/Resume'
    },

     {
        label : 'PORTFOLIO',
        to : '/Portfolio'
    },

     {
        label : 'CONTACT',
        to : '/Contact'
    },
     
]
const NavBar=()=>{

    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = ()=>{
        setToggleIcon(!toggleIcon)
    }
    return(
        <div>
            <nav className="navbar">
                <div className="navbar_container">
                   <Link to = {"/"} className="navbar_container_logo">
                   <FaDev size ={40} />
              </Link>
              </div>
             
                <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
                  {
                    data.map((item, key) =>(
                        <li key = {key} className="navbar_container_menu_item">
                            <Link className="navbar_container_menu_item_links" to= {item.to}>
                            {item.label}
                            </Link>

                        </li>
                    ))
                  }
                </ul>
                <div className="nav-icon" onClick = {handleToggleIcon}> 
                    {
                        toggleIcon ? <HiX size ={30}/> : <FaBars size ={"30"}/>
                    }
                    
              </div>

                

            </nav>
        </div>
    )
}

export default NavBar;