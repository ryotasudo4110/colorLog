// WritePageContent.tsx（同じディレクトリ or components に分ける）

'use client';

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { saveColorLog } from "@/lib/savelog";
import dayjs from "dayjs";
import CancelButton from '../components/cancelButton';

export default function WritePageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const dateParam = searchParams.get('date');
    const currentDate = dayjs().format("YYYY-MM-DD");

    const [color, setColor] = useState("#53da14ff");
    const [memo, setMemo] = useState("");

    const TODAY_LABEL = "今日";
    const logDate = !dateParam || dateParam === currentDate ? TODAY_LABEL : dateParam;

    const handleSave = () => {
        const saveData = {
            date: logDate === TODAY_LABEL ? currentDate : logDate,
            color,
            colorHex: color,
            memo
        };
        saveColorLog(saveData.date, saveData);
        alert(saveData.date + "の色を保存しました！");
        router.push('/calendar');
    };

    return (
        <main className="p-6 max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4">{logDate}の色を記録</h1>

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
                記録する
            </button>
            <CancelButton />
        </main>
    );
}
