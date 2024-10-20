import React from "react";

function Navbar () {
    return (
        <>
            <nav className="flex items-center justify-between mt-5 py-5 px-10 bg-zinc-700 text-white">
                <h2 className="text-2xl">Logo</h2>
                <div className="flex gap-8 items-center">
                <h4 className="text-xl">About</h4>
                <h4 className="text-xl">Contact</h4>
                <h4 className="text-xl">Services</h4>
                <h4 className="text-xl">Your Account</h4>
                </div>
            </nav>
        </>
    )
}

export default Navbar 