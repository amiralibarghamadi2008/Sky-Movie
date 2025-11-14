"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <span className="text-4xl font-bold mb-4">500</span>
        <p className="text-xl">خطای سرور</p>
        <button
          onClick={reset}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          تلاش مجدد
        </button>
      </div>
    </div>
  );
}
