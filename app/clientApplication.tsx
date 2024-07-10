"use client";
import { useEffect } from "react";
import { Amplify } from 'aws-amplify';
import amplifyconfig from "@/amplifyconfiguration.json";


Amplify.configure(amplifyconfig, { ssr: true });

export default function ClientApplication({ children }) {
    useEffect(() => {
        //console.log("Client-side effect triggered")
    }, []);
    return children
}