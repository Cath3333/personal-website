import React, { useState } from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Image } from "@nextui-org/react";
// import {Home, User, Briefcase, Database, BookOpen } from 'react-feather'
import icon from '../assets/icon.svg'
import iconWhite from '../assets/icon-white.svg'

function NavBar() {
    return(
        <Navbar isBordered={false} isBlurred className="p-5 w-full bg-transparent text-white font-light">
            <NavbarBrand>
                <Link color="foreground" href="/" className="flex">
                    <Image className="rotate" src={iconWhite} alt="icon" width={30} height={30} />
                    <p className="font-normal text-inherit m-auto ml-4">Catherine Chow</p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4 ml-auto" justify="start">
                <NavbarItem>
                <Link color="foreground" href="/about">
                    About
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link color="foreground" href="/portfolio">
                    Portfolio
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link color="foreground" href="/experiences">
                    Experiences
                </Link>
                </NavbarItem>
                {/* <NavbarItem className="text-sm">
                    Drag the cursor to interact with the background!
                </NavbarItem> */}
            </NavbarContent>
        </Navbar>
    )
}

export default NavBar;