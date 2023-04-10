import React from "react";
import Logo, { LogoSizes } from "./Logo";

function Banner() {
    return (
        <div className="w-full flex flex-row justify-between px-12 py-6 dark:text-white">
            <Logo size={LogoSizes.SMALL} withText={true} />
            <div className="flex flex-row gap-8">
                <a href="mailto:">Contact</a>
                <a href="https://code.cs.umanitoba.ca/comp3350-winter2023/a01-g10-habithero">
                    Source Code
                </a>
                <a href="https://code.cs.umanitoba.ca/comp3350-winter2023/a01-g10-habithero">
                    Download
                </a>
            </div>
        </div>
    );
}

export default Banner;
