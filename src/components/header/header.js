import React from "react";
import './style.css';
import { ReactComponent as IMG } from '../header/voice-assistant-animate.svg';
 const Header=()=>{
    return(
        <>
     
        <div className="navbar">
            <h3>Voice Assistant💁,<br/> makes your daily tasks easier🥈</h3>
        </div>
        <div className="animate">
               <IMG/>
        </div>
        </>
    )
}
export default Header;