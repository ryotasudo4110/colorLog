'use client';

import Link from "next/link";

export default function CancelButton() {

    return (
        <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-5">
            キャンセル
        </Link>
    );
}
