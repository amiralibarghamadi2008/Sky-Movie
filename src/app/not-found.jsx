import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <div className="text-center">
        <span className="text-4xl font-bold mb-4">404</span>
        <p className="text-xl pb-5">صفحه پیدا نشد</p>
      </div>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        برگشت به خانه
      </Link>
    </div>
  );
}
