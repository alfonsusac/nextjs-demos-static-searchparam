"use client"

import { useSearchParams } from "next/navigation"

export function SearchParamBoundary(p: {
  spkey: string,
  value: string,
  children: React.ReactNode
}) {
  const sp = useSearchParams()
  return (
    sp.get(p.spkey) === p.value ? p.children : <div className="hidden">p.children</div>
  )
}