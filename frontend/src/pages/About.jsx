import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import profilePic from "../assets/profile.jpg"
import profileContent from "../content/about.json"
import { Avatar } from '@mui/material';
import SocialMedia from '../components/SocialMedia';


function About(props) {
    return(
        <div
        className="absolute text-center top-[50%] 
                left-1/2 transform -translate-x-1/2 
                -translate-y-1/2 text-white w-[60%] mx-auto " >
            <div className="relative flex gap-10 items-center w-full max-w-6xl mx-auto">
                <Avatar elevation={2} alt="My Profile Pic" sx={{ width: 300, height: 300 }} src={profilePic} />
                <div className="space-y-4">
                    <h1 className="text-3xl">{profileContent.caption}</h1>
                    <p>{profileContent.desc_school}</p>
                    <p>{profileContent.desc_hobbies}</p>
                    <SocialMedia />
                </div>
            </div>
        </div>
    )
}

export default About;