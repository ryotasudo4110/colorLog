'use client';

import { useState } from "react";
import { saveColorLog } from "@/lib/savelog";
import dayjs from "dayjs";
import { useSearchParams } from 'next/navigation'
import { useRouter } from "next/navigation";
import CancelButton from '../components/cancelButton';

export default function WritePage() {
    const router = useRouter();

    // パラメータから日付を取得（日付がついていない時は当日の記録として処理、日付がついている時はその日の記録として処理）
    const searchParams = useSearchParams();
    const dateParam = searchParams.get('date');

    // 今日の日付を取得
    const currentDate = dayjs().format("YYYY-MM-DD");

    const [color, setColor] = useState("#53da14ff");
    const [memo, setMemo] = useState("");

    // 当日の色を記録するか、過去日付の色を記録するかを判別
    let logDate = "";
    const TODAY_LABEL = "今日";
    if (!dateParam || dateParam == currentDate) {
            // 当日の記録の場合
            logDate = TODAY_LABEL;
        }else{
            // 過去日付の記録の場合
            logDate = dateParam;
        }

    // 「記録する」ボタン押下時の処理
    const handleSave = () => {
        if (logDate == TODAY_LABEL) {
            // 当日の記録の場合
            saveColorLog(currentDate, { colorHex: color, memo });
            alert(logDate+"の色を保存しました！");
        }else{
            // 過去日付の記録の場合
            saveColorLog(logDate, { colorHex: color, memo });
            alert(logDate+"の色を保存しました！");
        }
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
                <a> 記録する </a>
            </button>
            <CancelButton></CancelButton>
        </main>
    );
}
