import React from "react";
import Logo, { LogoSizes } from "./Logo";

function Footer() {
    return (
        <div className="w-full h-64 bg-black text-white flex flex-col items-center justify-evenly">
            <Logo size={LogoSizes.MEDIUM} withText />
            <span>HabitHero &copy; 2023</span>
        </div>
    );
}

export default Footer;
