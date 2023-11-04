"use client"

import { useSearchParams } from "next/navigation"

export function SearchParamBoundary(p: {
  spkey: string,
  value: string,
  children: React.ReactNode
}) {
  const sp = useSearchParams()
  // console.log(p.spkey)
  // console.log(sp.get(p.spkey))
  return (
    sp.get(p.spkey) === p.value ? p.children : null
  )
}