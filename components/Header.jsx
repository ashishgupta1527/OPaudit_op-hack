import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"
import React from "react"

const Header = () => {
  return (
    <div className="flex justify-around items-center p-4 border-b-2">
      <h1 className="font-extrabold text-xl">
        <Link href="/">OPAudits</Link>
      </h1>
      <ConnectButton />
    </div>
  )
}

export default Header
