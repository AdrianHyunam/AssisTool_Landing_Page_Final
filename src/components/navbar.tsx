import { useState, useEffect } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";

interface NavItem {
    name: string;
    href: string;
}

const navItems: NavItem[] = [
    { name: "Precios", href: "/price.html" },
];

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="bg-gray-200 border-b border-gray-300 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                <a href="/">
                    <img
                        className="w-32 bg-white font-bold rounded-full p-2"
                        src="/images/assisTool.png"
                        alt="Logo"
                    />
                </a>
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                className="hover:font-bold text-gray-700"
                                href={item.href}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#"
                            className="px-6 py-2.5 bg-gray-500 text-white rounded-full hover:bg-gray-900 transition-all cursor-pointer"
                        >
                            Iniciar Sesión
                        </a>
                    </li>
                </ul>
                <button
                    onClick={() => setOpen((o) => !o)}
                    className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-20"
                    onClick={() => setOpen(false)}
                />
            )}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-500 z-30 p-6 transform transition-transform duration-200 ${open ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <button
                    className="mb-8 text-gray-600"
                    onClick={() => setOpen(false)}
                >
                    <X />
                </button>
                <ul className="flex flex-col space-y-6">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                className="text-white text-lg hover:font-bold"
                                href={item.href}
                                onClick={() => setOpen(false)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li>
                       <Button text="Iniciar Sesión" style="w-full px-4 py-2 bg-gray-500 text-white rounded-full text-center hover:bg-gray-900 transition-all cursor-pointer"/>
                    </li>
                </ul>
            </div>
        </nav>
    );
};