"use client";
import { useEffect, useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Amplify } from "aws-amplify";
import amplifyconfig from "@/src/amplifyconfiguration.json";

Amplify.configure(amplifyconfig, { ssr: true });

export default function ClientApplication({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  useEffect(() => {
    //console.log("Client-side effect triggered")
  }, []);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
