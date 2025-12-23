import { useState } from "react";

export default function Navbar() {
    const [active, setActive] = useState("Home");

    const menus = ["Home", "About me", "Sketches"];

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <nav className="flex items-center gap-1
                      bg-[#2a2a2a]/90 backdrop-blur-md
                      border border-white/10
                      rounded-lg px-2 py-1 shadow-lg">

                {menus.map((menu) => (
                    <button
                        key={menu}
                        onClick={() => setActive(menu)}
                        className={`px-2 py-2 m-1 text-sm rounded-full transition
              ${active === menu
                                ? "text-white "
                                : "text-[#9a9a9a] hover:text-white"}`}
                    >
                        {menu}
                    </button>
                ))}

                {/* CTA Contact */}
                <button
                    onClick={() => setActive("Contact")}
                    className={` px-2 py-2 m-1 text-sm rounded-lg transition
            ${active === "Contact"
                            ? "text-white bg-[#4a4a4a] border border-white/20"
                            : " text-[#ffff] bg-[#6c6c6c] borde-[#606061] hover:bg-[#ffff] hover:text-[#000000]"}`}
                >
                    Contact me
                </button>
            </nav>
        </div>
    );
}
