import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className="bg-red-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink className="inline-flex item-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 font-bold text-4xl cursive tracking-widest" to="/" exact activeClassName="text-white">
                        Karan Batra
                    </NavLink>
                    <NavLink className="inline-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800" to="/about" activeClassName="text-red-100 bg-red-700">
                        About
                    </NavLink>
                    <NavLink className="inline-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800" to="/project" activeClassName="text-red-100 bg-red-700">
                        Projects
                    </NavLink>
                    <NavLink className="inline-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800" to="/post" activeClassName="text-red-100 bg-red-700">
                        Blog Post
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/mrbatrakaran/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://github.com/batra-karan" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}