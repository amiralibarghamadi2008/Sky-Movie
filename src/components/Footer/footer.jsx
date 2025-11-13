"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/img/logo.png";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

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

        <div>
          <h3 className=" text-lg font-semibold mb-3">لینک‌های سریع</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/movies" className="hover:">
                فیلم‌ها
              </Link>
            </li>
            <li>
              <Link href="/series" className="hover:">
                سریال‌ها
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:">
                درباره ما
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:">
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className=" text-lg font-semibold mb-3">دنبال کنید</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-blue-500">
              <Facebook size={22} />
            </Link>
            <Link href="#" className="hover:text-pink-500">
              <Instagram size={22} />
            </Link>
            <Link href="#" className="hover:text-sky-400">
              <Twitter size={22} />
            </Link>
            <Link href="#" className="hover:text-red-500">
              <Youtube size={22} />
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
        طراحی و توسعه با ❤️ توسط Amirali
      </div>
    </footer>
  );
}
