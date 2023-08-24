import React from "react";

export default function Header(props){
    return(
        <div className="header">
            <h1>Where in the world?</h1>
            <button onClick={props.toggleDarkMode} >
              { props.darkMode?
               <img src="/sun-regular.svg" alt="moon" />
            
               :
               <img src="/moon-regular.svg" alt="sun" />
            
            
}
{props.darkMode? "Light mode": "Dark mode"}
            </button>
        </div>
    )
}