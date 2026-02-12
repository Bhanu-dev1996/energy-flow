// tailwind.config.ts
const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "oklch(var(--primary-50) / <alpha-value>)",
          100: "oklch(var(--primary-100) / <alpha-value>)",
          200: "oklch(var(--primary-200) / <alpha-value>)",
          300: "oklch(var(--primary-300) / <alpha-value>)",
          400: "oklch(var(--primary-400) / <alpha-value>)",
          500: "oklch(var(--primary-500) / <alpha-value>)",
          600: "oklch(var(--primary-600) / <alpha-value>)",
          700: "oklch(var(--primary-700) / <alpha-value>)",
          800: "oklch(var(--primary-800) / <alpha-value>)",
          900: "oklch(var(--primary-900) / <alpha-value>)",
          DEFAULT: "oklch(var(--primary-500) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
}

module.exports = config
