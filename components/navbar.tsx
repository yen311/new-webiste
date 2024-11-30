"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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
} from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import logo from "@/public/logo.png";
import { signOut, getCurrentUser, type AuthUser } from "aws-amplify/auth";
import { useRouter } from "next/navigation";

const blogs = [
  {
    title: "How to bridge a native SwiftUI view to React Native",
    description: "Get a better understanding of your traffic...",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    title: "How to setup amplify with NextJs 14",
    description: "Get a better understanding of your traffic...",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    title: "How to use flutter in the correct way.",
    description: "Get a better understanding of your traffic...",
    href: "#",
    icon: FingerPrintIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleSignOut = async () => {
    await signOut({ global: true });
    router.push("/login");
  };

  const pathname = usePathname();

  useEffect(() => {
    const getUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        console.log("username:", currentUser);
        setUser(currentUser);
      } catch (error) {
        console.log(error);
        setUser(null);
      }
    };
    getUser();
  }, [pathname]);

  return (
    <header className="bg-white bg-opacity-30 backdrop-blur-md">
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-16"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5">
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
        <div className="hidden lg:flex lg:gap-x-12 z-50">
          <a
            href="/resume"
            className="transition ease-in-out delay-150 text-sm font-semibold leading-6 text-main border-b-2 hover:border-primary hover:border-b-2 hover:text-primary"
          >
            Resume
          </a>
          <a
            href="/about"
            className="transition ease-in-out delay-150 text-sm font-semibold leading-6 text-main border-b-2 hover:border-primary hover:border-b-2 hover:text-primary"
          >
            README
          </a>
          <a
            href="/blogs"
            className="transition ease-in-out delay-150 text-sm font-semibold leading-6 text-main border-b-2 hover:border-primary hover:border-b-2 hover:text-primary"
          >
            Blogs
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
          {user?.username ? (
            <>
              <a
                href="/admin"
                className="text-sm font-semibold leading-6 text-main hover:text-primary mx-8"
              >
                Admin Page
              </a>
              <button
                type="button"
                className="transition ease-in-out delay-150 bg-white/70 hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 rounded"
                onClick={handleSignOut}
              >
                logout
              </button>
            </>
          ) : (
            <a
              href="/login"
              className="text-sm font-semibold leading-6 text-main hover:text-primary"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="bg-main/50 backdrop-blur-lg fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end ">
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
                <a
                  href="/blogs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text hover:bg-gray-50 hover:text-primary"
                >
                  Blogs
                </a>
              </div>
              <div className="py-6">
                {user?.username ? (
                  <a
                    type="button"
                    className="transition ease-in-out delay-150 bg-white/70 hover:bg-red-500 text-red-500 font-semibold hover:text-white -mx-3 block rounded-lg px-3 py-2.5 leading-7"
                    onClick={handleSignOut}
                  >
                    logout
                  </a>
                ) : (
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-text font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-primary"
                  >
                    Log in
                  </a>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
