/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState, startTransition } from "react"


// Code by joulev: https://github.com/joulev/debug/blob/search-in-rsc-with-search-params/app/page.tsx
export default function Input() {
  const router = useRouter()
  const readOnlySearchParam = useSearchParams()



  const searchParam = new URLSearchParams(readOnlySearchParam)
  const [value, setValue] = useState(searchParam.get("search") ?? "")
  
  useEffect(() => {
    if (readOnlySearchParam.get("search") !== value)
      setValue(readOnlySearchParam.get("search") ?? "")
  }, [readOnlySearchParam])

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      searchParam.set('search', value)
      startTransition(
        () => router.push(`/?${searchParam}`)
      )
    }, 300)

    return () => clearTimeout(debounceTimeout)
  }, [value])
  
  return <input value={ value } onChange={ e => setValue(e.target.value) } placeholder="Search" />
}