import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#061018] to-[#07101a] text-white flex items-center justify-center p-6">
      <img
        src="/energy-grid-bg.jpg"
        alt="Energy Grid"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-black/60" />

      <main className="relative z-10 w-full max-w-md text-center">
        <div className="flex w-[180px] h-[45px] mb-6 justify-center mx-auto">
          <img src="/EcoGrid Systems Logo.svg" alt="EcoGrid" className="" />
        </div>

        <Card className="bg-[#0b1720]/60 border-[#233044] p-8">
          <h2 className="text-2xl font-semibold mb-2">Reset Password</h2>
          <p className="text-sm text-gray-300 mb-6">
            Enter the email address associated with your account and we'll send you a link to reset your password.
          </p>

          <div className="space-y-4">
            <div>
              <Label className="text-xs text-gray-400 mb-2">Corporate Email Address</Label>
              <Input
                type="email"
                placeholder="name@company.com"
                className="bg-[#0f1b24] border-[#233044]"
              />
            </div>

            <Button className="w-full bg-[var(--primary-500)] hover:bg-[var(--primary-600)]">
              Send Recovery Link
            </Button>

            <div className="mt-6 text-center text-sm">
              <Link href="/login" className="text-gray-400 hover:text-gray-300">
                ← Return to Login
              </Link>
            </div>
          </div>
        </Card>

        <p className="text-xs text-gray-400 mt-8">© 2024 ECOGRID ENERGY SOLUTIONS</p>
      </main>
    </div>
  )
}