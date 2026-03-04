import { useState } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";

interface NavItem {
    name: string;
    href: string;
}

const navItems: NavItem[] = [
    // point to the static page in `public/price.html`
    { name: "Precios", href: "/price.html" },
    // { name: "Iniciar Sesión", href: "#" },
];

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="relative">
            {/* desktop links */}
            <ul className="hidden md:flex justify-between gap-8 p-4 rounded-full">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <a
                            className="flex flex-col hover:font-bold mt-3"
                            href={item.href}
                        >
                            {item.name}
                        </a>
                    </li>
                ))}

                <li className="flex">
                    <Button text="Iniciar Sesión" style="w-[160px]" />
                </li>
            </ul>

            {/* hamburger button visible only on mobile */}
            <div className="md:hidden p-4 flex justify-end">
                <button
                    onClick={() => setOpen((o) => !o)}
                    className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* mobile menu rendered only on small screens */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-gray-500 shadow-md transition-transform duration-200 ${open ? 'translate-y-0' : '-translate-y-4 opacity-0 pointer-events-none'} `}
            >
                <ul className="flex flex-col p-4 space-y-4">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                className="block hover:font-bold"
                                href={item.href}
                                onClick={() => setOpen(false)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <Button text="Iniciar Sesión" style="w-full" />
                    </li>
                </ul>
            </div>
        </nav>
    );
};