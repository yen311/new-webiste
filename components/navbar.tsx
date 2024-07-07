"use client";
import { useState, useEffect } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    XMarkIcon,
    MoonIcon,
    SunIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import logo from '../public/logo.png';

const blogs = [
    { title: 'How to bridge a native SwiftUI view to React Native', description: 'Get a better understanding of your traffic...', href: '#', icon: ChartPieIcon },
    { title: 'How to setup amplify with NextJs 14', description: 'Get a better understanding of your traffic...', href: '#', icon: CursorArrowRaysIcon },
    { title: 'How to use flutter in the correct way.', description: 'Get a better understanding of your traffic...', href: '#', icon: FingerPrintIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white bg-opacity-30 backdrop-blur-md">
            <nav className="mx-auto flex items-center justify-between p-6 lg:px-16" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-14 w-auto" src={logo.src} alt="" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <a href="/resume" className="transition ease-in-out delay-150 text-sm font-semibold leading-6 text-main border-b-2 hover:border-primary hover:border-b-2 hover:text-primary">
                        Resume
                    </a>
                    <a href="/about" className="transition ease-in-out delay-150 text-sm font-semibold leading-6 text-main border-b-2 hover:border-primary hover:border-b-2 hover:text-primary">
                        About Me
                    </a>
                    <Popover className="relative group">
                        <PopoverButton className="transition ease-in-out delay-150 flex items-center gap-x-1 text-sm font-semibold leading-6 text-main group-hover:text-primary">
                            Blogs
                            <ChevronDownIcon className="h-5 w-5 flex-none text-main group-hover:text-primary" aria-hidden="true" />
                        </PopoverButton>
                        <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="p-4">
                                {blogs.map((item) => (
                                    <div
                                        key={item.title}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                    >
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold text-gray-900">
                                                {item.title}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid bg-gray-50">
                                <a
                                    href="/blogs"
                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                >
                                    <PlayCircleIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                    View All Blogs
                                </a>
                            </div>
                        </PopoverPanel>
                    </Popover>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="/login" className="text-sm font-semibold leading-6 text-main hover:text-primary">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="bg-main/50 backdrop-blur-lg fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-end">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-14 w-auto" src={logo.src} alt="" />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500">
                            <div className="space-y-2 py-6">
                                <a
                                    href="/resume"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text hover:bg-gray-50 hover:text-primary"
                                >
                                    Resume
                                </a>
                                <a
                                    href="/about"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text hover:bg-gray-50 hover:text-primary"
                                >
                                    About Me
                                </a>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-text hover:bg-gray-50 hover:text-primary">
                                                Blogs
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {[...blogs].map((item) => (
                                                    <DisclosureButton
                                                        key={item.title}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-text hover:bg-gray-50 hover:text-primary"
                                                    >
                                                        {item.title}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                            <div className="py-6">
                                <a
                                    href="/login"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-text font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-primary"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
