'use client';

import { Suspense } from "react";
import WritePageContent from "../components/WritePageContent";

export default function WritePage() {
    return (
        <Suspense fallback={<div>読み込み中...</div>}>
            <WritePageContent />
        </Suspense>
    );
}
