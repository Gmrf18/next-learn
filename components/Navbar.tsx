import React, {FC} from "react";
import Link from "next/link";

const menuItems = [
    {text: 'Home', href: '/'},
    {text: 'About', href: ' /about'},
    {text: 'Pricing', href: ' /pricing'}
]


export const Navbar : FC = () => {
    return <nav>
        {menuItems.map(({text, href}) =>
            <Link key={href} href={href}>{text}</Link>
        )}
    </nav>
}
