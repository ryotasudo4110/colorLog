export type ColorLog = {
    colorHex?: string;
    memo?: string;
};

// 入力データを保存
export function saveColorLog(date: string, data: ColorLog) {
    localStorage.setItem(`color-log-${date}`, JSON.stringify(data));
}

// 保存したログを一件だけ取得
export function getColorLog(date: string): ColorLog | null {
    const log = localStorage.getItem(`color-log-${date}`);
    return log ? JSON.parse(log) : null;
}

// 保存したログを全件取得
export function getAllColorLog():{ date: string; color: string }[]{
    const logs:{date:string; color:string}[] = [];

    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        if (key?.startsWith("color-log-")) {
            const date = key.replace("color-log-","");
            const value = localStorage.getItem(key);
            if (value) {
                const parsed = JSON.parse(value);
                logs.push({date,color:parsed.colorHex});
            }
        }
    }
    return logs;
}