import React, { useState } from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Image } from "@nextui-org/react";
// import {Home, User, Briefcase, Database, BookOpen } from 'react-feather'
import icon from '../assets/icon.svg'
import iconWhite from '../assets/icon-white.svg'

function NavBar() {
    return(
        <Navbar isBordered={false} isBlurred className="p-5 w-full bg-transparent">
            <NavbarBrand>
                <Link color="foreground" href="/" className="flex">
                    <Image className="rotate" src={iconWhite} alt="icon" width={40} height={40} />
                    <p className="font-bold text-inherit m-auto ml-4">Cath Chow :D</p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4 ml-auto" justify="end">
                <NavbarItem>
                <Link color="foreground" href="/">
                    Home
                </Link>
                </NavbarItem>
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
            </NavbarContent>
        </Navbar>
    )
}

export default NavBar;