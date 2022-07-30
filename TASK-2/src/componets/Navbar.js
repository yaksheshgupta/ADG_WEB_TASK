import React from "react";
export default function nav(){
    return(
        <div >
            <ul className="navname ">
                <li style={{marginLeft:100}}>
                    ADG Task-2
                </li>
            <div className="dropdown" style={{marginLeft:200}}>
            <button className="dropbtn" href="#">This Github</button>
            </div>
            <div className="dropdown" style={{marginLeft:60}}>
            <button className="dropbtn">Social Media</button>
            <div className="dropdown-content"style={{minWidth: 190}}>
                <a href="/">Instagram</a>
                <a href="/">Linked In</a>
                <a href="/">Twitter</a>
            </div>
            </div>
            <div className="dropdown" style={{marginLeft:70}}>
            <a className="dropbtn" href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids">Github</a>
            </div>
            <div className="dropdown" style={{marginLeft:70}}>
            <a className="dropbtn" href="/">Twitter</a>
            </div>
                   
            <div className="dropdown" style={{marginLeft:40}}>
            <button className="dropbtn">Account</button>
            <div className="dropdown-content">
                <a href="/">LogIn</a>
                <a href="/">SignUp</a>
            </div>
            </div>
            </ul>
        </div>
    )
}