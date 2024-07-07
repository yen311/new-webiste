"use client";
import { useEffect } from "react";

export default function ClientApplication({ children }) {
    useEffect(() => {
        console.log("Client-side effect triggered")
    }, []);
    return children;
}