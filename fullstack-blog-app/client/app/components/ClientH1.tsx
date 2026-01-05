'use client';

import { useEffect, useState } from "react";

export default function ClientH1() {

    const [content, setContent] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setContent('This H1 render on CLIENT');
        }, 2000);
    }, []);
    
    return <h1>{content}</h1>
}