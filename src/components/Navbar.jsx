export default function Navbar({ page, setPage }) {

    const menus = ["Home", "About Me"];

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center">
            <nav className="flex items-center gap-0.5
        bg-[#2a2a2a]/90 backdrop-blur-md
        border border-white/10
        rounded-lg px-2 py-1 shadow-lg">

                {menus.map((menu) => (
                    <button
                        key={menu}
                        onClick={() => setPage(menu)}
                        className={`px-2 py-2 m-1 text-sm rounded-full transition
              ${page === menu
                                ? "text-white"
                                : "text-[#9a9a9a] hover:text-white"}`}
                    >
                        {menu}
                    </button>
                ))}

                <a
                    href="mailto:muchammadibrahimalamin@gmail.com"
                    className={`px-2 py-2 m-1 text-sm rounded-lg transition
            ${page === "Contact"
                            ? "text-white bg-[#4a4a4a] border border-white/20"
                            : "text-white bg-[#6c6c6c] hover:bg-white hover:text-black"}`}
                >
                    Contact me
                </a>
            </nav>
        </div>
    );
}
