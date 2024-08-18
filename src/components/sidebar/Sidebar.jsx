import { assets } from "../../assets/assets/assets"
import './Sidebar.css'
import {useState} from "react";

function Sidebar(){
    const[menu,setMenu]=useState(false);
    return(     <>
    <div className="sidebar">
        <div className="top">
            <div>
            <img className='im' onClick={()=>setMenu(prev=>!prev)} id="menu" src={assets.menu_icon} alt="Menu-icon" />
            </div>
                
                <div className="new-chat">  
                    <img className='im' id="plus-icon" src={assets.plus_icon} alt="plus-icon" />
                    {menu?<p>New Chat</p>:null}
                </div>
                <div className="recent">
                    {menu?<p>Recent</p>:null}
                </div>
                {menu?<div className="search-history">
                    <img src={assets.message_icon} alt="message-icon" className="im" />
                    <p>sigma batman... </p>
                </div>:null}
        </div>
        <div className="bottom">
                <div className="help">
                    <img className='im' src={assets.question_icon} alt="help-icon" />
                    {menu?<p>Help</p>:null}
                </div>
                <div className="activity">                                                    <img className="im"src={assets.history_icon} alt="recent" />
                    {menu?<p>Activity</p>:null}
                </div>
                <div className="setting">
                    <img className="im"src={assets.setting_icon} alt="setting-icon" />
                    {menu?<p>Settings</p>:null}
                </div>   
        </div>      
    </div>
                </>)
}
export default Sidebar
