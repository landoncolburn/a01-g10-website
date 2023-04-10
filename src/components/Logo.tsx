import React from "react";

export enum LogoSizes {
    SMALL = "32px",
    MEDIUM = "48px",
    LARGE = "64px",
}

interface LogoProps {
    size: LogoSizes;
    withText: boolean;
}

const FONT_SIZES = {
    [LogoSizes.SMALL]: "text-2xl",
    [LogoSizes.MEDIUM]: "text-4xl",
    [LogoSizes.LARGE]: "text-6xl",
};

function Logo({ size, withText }: LogoProps) {
    return (
        <div className="flex flex-row gap-4 items-center">
            <img src="logo.png" alt="" width={size} />

            {withText && (
                <h1 className={`font-semibold ${FONT_SIZES[size]}`}>
                    HabitHero
                </h1>
            )}
        </div>
    );
}

export default Logo;
