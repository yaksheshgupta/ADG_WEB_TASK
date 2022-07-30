import React from "react";
export default function nav(){
    return(
        <div >
            <ul className="navname ">
                <li style={{marginLeft:100}}>
                    ADG Task-2
                </li>
            <div className="dropdown" style={{marginLeft:200}}>
            <button className="dropbtn" href="https://github.com/yaksheshgupta/ADG_WEB_TASK/tree/main/TASK-2">This Github</button>
            </div>
            <div className="dropdown" style={{marginLeft:60}}>
            <button className="dropbtn">Social Media</button>
            <div className="dropdown-content"style={{minWidth: 190}}>
                <a href="/">Instagram</a>
                <a href="https://www.linkedin.com/in/yakshesh-gupta-254643230/">Linked In</a>
                <a href="https://twitter.com/GuptaYakshesh">Twitter</a>
            </div>
            </div>
            <div className="dropdown" style={{marginLeft:70}}>
            <a className="dropbtn" href="https://github.com/yaksheshgupta/">Github</a>
            </div>
            <div className="dropdown" style={{marginLeft:70}}>
            <a className="dropbtn" href="https://twitter.com/GuptaYakshesh">Twitter</a>
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
