"use client"

import { useSearchParams } from "next/navigation"

export default function ClientSideContent() {
  const sp = useSearchParams()
  console.log("Hello")
  console.log(sp.get("search"))
  return (
    <section>
      <p>
        Search Result: { sp.get('search') ?? "n/a" }
      </p>
    </section>
  )
}