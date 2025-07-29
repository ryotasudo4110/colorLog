'use client';

import Link from "next/link";

export default function HomeButton() {

    return (
        <div className="flex justify-center mt-6 mb-5">
            <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                ホーム
            </Link>
        </div>
    );
}
