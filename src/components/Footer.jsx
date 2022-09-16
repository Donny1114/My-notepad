import React from "react";

function Footer(){
    
    const date = ( new Date().getFullYear());

    return (
        <div> 
        <footer>{"Copyright" + " " + date}</footer>
        </div>
    )
}


export default Footer;
