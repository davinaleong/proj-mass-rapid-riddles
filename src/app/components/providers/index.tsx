"use client"

import { ThemeProvider } from "next-themes"

export function Providers({ children }: any): JSX.Element {
  return (
    <ThemeProvider>
      <div className="app">{children}</div>
    </ThemeProvider>
  )
}
