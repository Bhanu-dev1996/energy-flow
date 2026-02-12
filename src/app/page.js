import { Suspense } from "react";
import LoginPage from "./auth/login/page";
import { Toaster } from "@/components/ui/sonner"

export default function Home() {
  return (
    <>
      <Toaster className="top-right" />
      <Suspense fallback={<div>Loading...</div>}>
        <LoginPage />
      </Suspense>
    </>
  );
}
