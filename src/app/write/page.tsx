'use client';

import { useState } from "react";
import { saveColorLog } from "@/lib/savelog";
import dayjs from "dayjs";
import { log } from "console";

export default function WritePage() {
    const [color, setColor] = useState("#53da14ff");
    const [memo, setMemo] = useState("");

    const handleSave = () => {
        const today = dayjs().format("YYYY-MM-DD");
        saveColorLog(today, { colorHex: color, memo });
        alert("保存しました！");
    };
    

    return (
        <main className="p-6 max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4">今日の色を記録</h1>

            <label className="block mb-2">色を選んでください：</label>
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-20 h-12 mb-4"
            />

            <label className="block mb-2">メモ（任意）：</label>
            <textarea
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                className="w-full h-24 border rounded p-2 mb-4"
                placeholder="景色や気持ちなど"
            />

            <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                <a href="/calendar"> 記録する </a>
            </button>
        </main>
    );
}
