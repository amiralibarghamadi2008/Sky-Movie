import "./globals.css";

export const metadata = {
  title: "اسکای مووی مرجع دانلود فیلم سریال",
  description: "اسکای مووی مرجع دانلود فیلم سریال  بدون سانسور",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}