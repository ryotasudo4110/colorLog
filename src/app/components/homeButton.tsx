'use client';

export default function HomeButton() {

    return (
        <div className="flex justify-center mt-6 mb-5">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                <a href="/"> ホーム </a>
            </button>
        </div>
    );
}
