import React from 'react'
import Image from '../public/Yen.jpg';
import {
    FaGithub,
    FaFacebook,
    FaLinkedin,
    FaInstagram
} from "react-icons/fa";

function footer() {
    return (
        <footer className='flex flex-col justify-around items-center p-4 lg:p-24 mx-auto w-9/12 border-t border-gray-300 text-stone-200'>
            <div className="flex flex-1 flex-col justify-between items-center mb-4 space-y-2 > *">
                <img className="bg-gray-500 rounded-full w-40 h-40" src={Image.src} alt="404" />
                <p className="font-bold text-opacity-80 text-3xl" >Yen Kuo</p>
                <a
                    className="font-semibold text-opacity-80 text-xs hover:text-stone-500"
                    href="mailto:kuoyen5@gmail.com"
                    target='_blank'
                >
                    kuoyen5@gmail.com
                </a>
                <div className="flex flex-1 justify-between items-center space-x-2 > *">
                    <a
                        href='https://github.com/yen311'
                        target='_blank'
                    >
                        <FaGithub
                            className='hover:text-stone-500 w-6 h-6'
                        />
                    </a>
                    <a
                        href='https://www.facebook.com/profile.php?id=100001234828807'
                        target='_blank'
                    >
                        <FaFacebook
                            className='hover:text-stone-500 w-6 h-6'
                        />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/yen-kuo/'
                        target='_blank'
                    >
                        <FaLinkedin
                            className='hover:text-stone-500 w-6 h-6'
                        />
                    </a>
                    <a
                        href='https://www.instagram.com/yen__0311/'
                        target='_blank'
                    >
                        <FaInstagram
                            className='hover:text-stone-500 w-6 h-6'
                        />
                    </a>

                </div>
            </div>
            <div className='flex-1'>
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="mb-4">
                    Hello, I'm Yen. The full stack software developer based in Adelaide.
                    Currently mainly focus on Django, React.js, and public cloud platform (Azure, AWS).
                    I'm also the Alumni of Australian National University and Portland State University.
                    Coding make me feel exciting, love to build awesome projects.
                    For 2024, I'll explore some new things I'm interested in, such as NextJs, GraphQL, SwiftUI and more ...
                </p>
            </div>
        </footer>
    )
}

export default footer