export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">ColorLog</h1>
      <p className="mb-6">「今日、よく目に入った色」を記録しよう</p>
      <a
        href="/write"
        className="mb-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        色を記録する
      </a>
      <a
        href="/calendar"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        カレンダーを見る
      </a>
    </main>
  );
}
