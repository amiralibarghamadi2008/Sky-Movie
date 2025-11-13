import Navbar from "@/components/Navbar/navbar";
import ThemeWrapper from "@/components/Them/ThemeWrapper";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer/footer";

export const metadata = {
  title: "اسکای مووی مرجع دانلود فیلم سریال",
  description: "اسکای مووی مرجع دانلود فیلم سریال  بدون سانسور",
};

const myFont = localFont({
  src: "../../public/font/SFArabic-Regular.woff2",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <body
        className={`${myFont.className} `}
        dir="rtl"
        suppressHydrationWarning
      >
        <ThemeWrapper>
          <Navbar />
          {children}
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
