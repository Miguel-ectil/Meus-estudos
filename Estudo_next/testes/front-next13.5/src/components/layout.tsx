'use client'
import { useState, useEffect, Fragment } from "react";
import Sidebar from "../layout/Sidebar";
import { Menu } from "../layout/Navbar";
import { Transition } from "@headlessui/react";

export default function Layout({ children }: { children: any }) {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (innerWidth <= 1008) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <Menu showNav={showNav} setShowNav={setShowNav} />
      </div>
      <Transition
        as={Fragment}
        show={showNav}
        enter="transform transition duration-[300ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div style={{ position: 'fixed', top: 0, zIndex: 1000 }}>
          <Sidebar showNav={showNav} />
        </div>
      </Transition>
      <main
        className={`transition-all duration-[400ms] ${showNav && !isMobile ? "pl-60" : ""}`}
      >
        <div className="mt-12 px-4 z-50">{children}</div>
      </main>
    </>
  );
}

