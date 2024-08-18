import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets/assets'
function Main(){

    return(<> 
    {
        <div className="main">
            <div className='intro'>
                    <p>Gemini</p>
                    <img className='user-icon' src={assets.my_icon} alt="user-icon"/>
            </div>
            <div className="center">
                <div className="welcome">
                    <p className='greet'>
                        <span className='hello'>Hello ,Farhan</span>
                    </p>
                    <p className='greet'>How Can i Help You Today?</p>
                </div>
                <div className="card-container">
                    <div className="card">
                        <p>Suggest Some Place To Visit In Kerala</p>
                        <img className='image' src={assets.compass_icon} alt="compass-icon" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img className='image' src={assets.message_icon} alt="message-icon" />
                    </div>
                    <div className="card">
                        <p>How to Create a Gyroscope using Disc?</p>
                        <img className='image' src={assets.bulb_icon} alt="bulb-icon" />
                    </div>
                    <div className="card">
                        <p>Create a Script for the youtube video about coding</p>
                        <img className='image' src={assets.code_icon} alt="code-icon" />
                    </div>
                </div>
            </div>
                <div className='end'>
                        <div className="inp">
                                <input type="text" className="enter" placeholder='Enter the Prompt Here'/>
                                <img src={assets.gallery_icon} alt="" className="icon" />
                                <img src={assets.mic_icon} alt="" className="icon" />
                                <img src={assets.send_icon} alt="" className="icon" />
                                      
                        </div>
                        <div className="text">
                                <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps</p>
                        </div>
                </div>
        </div>    
    }
            </>)
}
export default Main
