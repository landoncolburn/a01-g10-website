import React from "react";

interface ButtonProps {
    name: string;
    color: "primary" | "secondary";
    link: string;
    action?: () => void;
}

function CTAButton({ name, color, link, action }: ButtonProps) {
    return (
        <a
            className={`text-md px-6 py-2 my-6 rounded-md ${
                color == "primary"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : " bg-white text-black dark:bg-[#66cccc]"
            }`}
            href={action ? "#video" : link}
            onClick={action}
        >
            {name}
        </a>
    );
}

export default CTAButton;
