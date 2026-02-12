"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Eye } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export function LoginForm({ className, ...props }) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const validateForm = () => {
        const newErrors = {}

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address"
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = "Password is required"
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData(prev => ({
            ...prev,
            [id]: value
        }))
        // Clear error for this field when user starts typing
        if (errors[id]) {
            setErrors(prev => ({
                ...prev,
                [id]: ""
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!validateForm()) {
            return
        }

        setIsLoading(true)

        try {
            // Dummy credentials for testing
            const DUMMY_EMAIL = "demo@example.com"
            const DUMMY_PASSWORD = "password123"

            if (formData.email === DUMMY_EMAIL && formData.password === DUMMY_PASSWORD) {
                toast.success("Login successful! Redirecting to dashboard...")
                // Wait 1.5 seconds before navigating
                setTimeout(() => {
                    router.push("/dashboard")
                }, 1500)
            } else {
                toast.error("Invalid email or password")
                setErrors({
                    email: "Invalid email or password"
                })
                setIsLoading(false)
            }
        } catch (error) {
            console.error("Login failed:", error)
            toast.error("An error occurred. Please try again.")
            setIsLoading(false)
        }
    }

    return (
        <form
            className={cn(
                "flex flex-col gap-6 p-8",
                className
            )}
            onSubmit={handleSubmit}
            {...props}
        >
            <FieldGroup>
                {/* Header */}
                <div className="flex flex-col items-center gap-2 text-center">
                    <div className="flex w-[180px] h-[45px] mb-4 items-center justify-center">
                        <img
                            src="/EcoGrid Systems Logo.svg"
                            alt="Energy Flow Logo"
                            className=""
                        />
                    </div>

                    <h1 className="text-2xl font-semibold tracking-tight">
                        Welcome back
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Access your energy management dashboard
                    </p>
                </div>

                {/* Email */}
                <Field>
                    <FieldLabel htmlFor="email" className="text-[13px] font-normal">Email</FieldLabel>
                    <Input
                        id="email"
                        type="email"
                        placeholder="example@gmial.com"
                        className={cn("bg-[#161e2d] h-10 border", errors.email ? "border-red-500" : "border-[#0a1c1f]")}
                        value={formData.email}
                        onChange={handleChange}
                        // required
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </Field>

                {/* Password */}
                <Field>
                    <div className="flex items-center">
                        <FieldLabel htmlFor="password" className="text-[13px] font-normal">Password</FieldLabel>
                        <Link
                            href="/login/reset"
                            className="ml-auto text-xs text-emerald-400 hover:underline"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <div className="relative">
                        <Input
                            id="password"
                            type="password"
                            placeholder="************"
                            className={cn("bg-[#161e2d] pr-10 h-10 border", errors.password ? "border-red-500" : "border-[#0a1c1f]")}
                            value={formData.password}
                            onChange={handleChange}
                            // required
                        />
                        <Eye className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer" />
                    </div>
                    {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
                </Field>

                {/* Remember Me */}
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" className="cursor-pointer" />
                    <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                        Remember me
                    </label>
                </div>

                {/* Submit */}
                <Field>
                    <Button 
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[var(--primary-500)]
  hover:bg-[var(--primary-600)] text-white cursor-pointer disabled:opacity-50"
                    >
                        {isLoading ? "Signing In..." : "Sign In to Dashboard"}
                    </Button>
                </Field>

                {/* <FieldSeparator>Enterprise SSO</FieldSeparator> */}

                <Field>
                    {/* <Button variant="outline" type="button" className="w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="mr-2 h-4 w-4"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            Continue with GitHub
          </Button> */}

                    <FieldDescription className="text-center text-xs">
                        Don&apos;t have an account?{" "}
                        <a href="#" className="underline underline-offset-4">
                            Request access
                        </a>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    )
}
