export type ColorLog = {
    colorHex: string;
    memo?: string;
};

// 保存する関数
export function saveColorLog(date: string, data: ColorLog) {
    localStorage.setItem(`color-log-${date}`, JSON.stringify(data));
}

// 取り出す関数（あとで使う用）
export function getColorLog(date: string): ColorLog | null {
    const raw = localStorage.getItem(`color-log-${date}`);
    return raw ? JSON.parse(raw) : null;
}