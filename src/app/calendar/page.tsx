"use client"

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import { ColorLog, getAllColorLog } from "@/lib/savelog";
import { getColorLog } from "@/lib/savelog";
import { useState } from 'react';
import { useEffect} from 'react';
import { useRouter } from "next/navigation";
import HomeButton from '../components/homeButton';

export default function Calendar() {
    const router = useRouter();

    // ローカルストレージに保存されている日付と色のデータを全件取得
    const [colorLogs, setColorLogs] = useState([]);

    useEffect(() => {
        const logs = getAllColorLog();
        setColorLogs(logs);
    }, []);

    // console.log(colorLogs);

    // ローカルストレージから取得した日付と色をもとにイベントを作成
    const events = colorLogs.map((log) => {
        return {
            start: log.date,
            title: "",
            backgroundColor: log.color,
            display: "background",
        };
    });

    // 日付をクリックされた時の処理
    const clickDateHandle = (clickDate: string, log: ColorLog | null) => {
        // 記録済かどうかの判定
        // ローカルストレージの全ログからクリックした日付のログがあるかチェック
        const allLogs = getAllColorLog();
        const isLogged = allLogs.some(log => log.date === clickDate);

        if (isLogged) {
            // 記録済の場合
            // 「修正しますか」のポップアップ表示
            const confirmed = window.confirm(`${clickDate} の記録\nカラーコード: ${log.colorHex}\nメモ: ${log.memo}\n\n修正しますか？`);
            if (confirmed) {
                // 記録画面への遷移　日付のパラメータを渡す
                router.push(`/write?date=${clickDate}`);
            }
        }else{
            // 未記録の場合
            // 「記録しますか」のポップアップ表示
            const confirmed = window.confirm(`${clickDate} は未記録です。\n記録しますか？`);
            if (confirmed) {
                // 記録画面への遷移　日付のパラメータを渡す
                router.push(`/write?date=${clickDate}`);
            }
        }
    };
    

    return (
            <div className="max-w-screen-md mx-auto mt-5">
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    locale="ja"
                    contentHeight={'auto'}
                    showNonCurrentDates={false}
                    events={events}
                    dateClick={(info) => {
                        const clickDate = info.dateStr;
                        const log = getColorLog(clickDate);
                        clickDateHandle(clickDate,log);
                    }}/>
                    <HomeButton></HomeButton>
            </div>
    )
}
