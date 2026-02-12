"use client"

import React from "react"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
    return (
        <div className="grid min-h-screen lg:grid-cols-3 text-white">

            {/* LEFT – IMAGE / HERO */}
            <div className="relative hidden lg:col-span-2 lg:block">
                <img
                    src="/energy-grid-bg.jpg" // replace with your real image
                    alt="Energy Grid"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/90" />

                {/* Optional branding/content */}
                <div className="relative z-10 flex h-full flex-col justify-center p-12">
                    <div className="">
                        <div className="flex w-[180px] h-[45px] mb-4">
                            <img
                                src="/EcoGrid Systems Logo.svg"
                                alt="Energy Flow Logo"
                                className=""
                            />
                        </div>
                        <h1 className="text-4xl font-bold leading-tight">
                            Sustainable Energy{" "}
                            <br />
                            <span className="text-emerald-400">Intelligence.</span>
                        </h1>
                        <p className="mt-4 max-w-md text-gray-300">
                            Optimizing the world's energy consumption through AI-driven
                            insights and real-time grid monitoring.
                        </p>
                    </div>

                    <p className="text-xs text-gray-400 absolute bottom-12">
                        © 2024 EcoGrid Energy Solutions Inc.
                    </p>
                </div>
            </div>

            {/* RIGHT – LOGIN */}
            <div className="flex flex-col items-center justify-center px-6 md:px-10 bg-[#0a161f]">
                <div className="w-full max-w-sm">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}
