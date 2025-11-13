"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/img/logo.png";
import ThemeToggle from "../Them/ThemeToggle";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      href: "/movies",
      label: "فیلم ها",
      icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z",
    },
    {
      href: "/series",
      label: "سریال",
      icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      href: "/about-us",
      label: "درباره ما",
      icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
  ];

  const commonClass =
    "flex items-center gap-2 dark:hover:bg-gray-800 transition-all dark:hover:text-white p-2 rounded-lg";

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="p-2 ">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />

          <div
            className="fixed right-0 top-0 h-full w-64  shadow-lg"
            style={{ backgroundColor: "var(--color-bg-main)" }}
          >
            <div
              className="p-4    rounded-bl-4xl flex justify-between items-center"
              style={{ backgroundColor: "var(--color-bg-navbar)" }}
            >
              <Image
                src={Logo}
                alt="اسکای مووی"
                width={75}
                height={75}
                loading="lazy"
              />
              <button onClick={() => setIsOpen(false)} className="p-2 ">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-80px)]">
              <ul className="space-y-4 ">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={commonClass}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={item.icon}
                        />
                      </svg>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-gray-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="">تغییر تم</span>
                  <ThemeToggle />
                </div>
                <button
                  className={`${commonClass} w-full justify-center border border-gray-300 `}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <Link href="/sing-in">ورود \ ثبت نام</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
