"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/img/logo.png";
import { Instagram, Youtube } from "lucide-react";

const TelegramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.197l-1.84 8.576c-.125.586-.463.732-.94.455l-2.607-1.92-1.26 1.214c-.138.138-.255.255-.523.255l.188-2.662 4.838-4.371c.211-.188-.046-.293-.33-.107l-5.992 3.773-2.586-.807c-.564-.176-.576-.564.117-.84l10.017-3.858c.47-.176.88.107.725.84z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: "var(--color-bg-navbar)" }}
      className="mt-10"
    >
      <div className="container py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="اسکای مووی"
              width={70}
              height={70}
              loading="lazy"
            />
            <span className="text-lg md:text-xl font-bold">اسکای مووی</span>
          </Link>
          <p className="text-sm mt-4 text-gray-400 leading-6">
            تماشای آنلاین جدیدترین فیلم‌ها و سریال‌ها با دوبله و زیرنویس فارسی.
          </p>
        </div>

        <div className="flex flex-col">
          <h3 className=" text-lg font-semibold mb-3">لینک‌های سریع</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/movies" className=" flex items-center gap-2  px-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
                فیلم‌ها
              </Link>
            </li>
            <li>
              <Link href="/series" className=" flex items-center gap-2  px-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                سریال‌ها
              </Link>
            </li>
            <li>
              <Link href="/about" className=" flex items-center gap-2  px-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                درباره ما
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className=" text-lg font-semibold mb-3">دنبال کنید</h3>
          <div className="flex flex-col gap-4">
            <Link
              href="#"
              className="hover:text-pink-500 flex items-center gap-2  px-2"
            >
              <Instagram size={22} />
              پیج Instagram ما را follow کنید
            </Link>
            <Link
              href="#"
              className="hover:text-red-500 flex items-center gap-2  px-2"
            >
              <Youtube size={22} />
              کانال Youtube ما را subscribe کنید
            </Link>
            <Link
              href="#"
              className="hover:text-blue-500 flex items-center gap-2  px-2"
            >
              <TelegramIcon size={22} />
              کانال Telegram ما را joine کنید
            </Link>
          </div>
        </div>

        <div className="lg:col-span-1 sm:col-span-2 flex flex-col justify-between">
          <h3 className=" text-lg font-semibold mb-3">اطلاعات</h3>
          <p className="text-sm text-gray-400">
            تمامی حقوق این وب‌سایت متعلق به <span className="">Sky Movie</span>{" "}
            است © {currentYear}
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        طراحی شده با ❤️ توسط تیم Sky Movie
      </div>
    </footer>
  );
}
