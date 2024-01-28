import Link from "next/link"
import React, { useState } from "react"
import { writeContract } from "@wagmi/core"
import { parseEther } from "viem"
import { AUDIT_REPORT, AUDIT_REPORT_ABI } from "../constants"

const Dashboard = () => {
  const [txt, setTxt] = useState(0)
  return (
    <div className="border-2 max-w-3xl mx-auto p-4  rounded-md  my-8">
      <div
        // key={idx}
        className="flex justify-between"
        href={{ pathname: "/submit", query: { name: "0xfable" } }}
      >
        <div className="flex flex-col items-center justify-center">
          <p className="mx-2">OxFable</p>
          <p className="mx-2">Contributed by: asshish</p>
        </div>
        <div className="space-y-4">
          <p className="max-w-96">This audit lists 7 critical bugs, 6 major bugs, 3 minor bugs.</p>
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
            onClick={(e) => {
              e.preventDefault()
              location.href = "https://github.com"
            }}
          >
            View PDF
          </button>

          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
            data-modal-target="small-modal"
            data-modal-toggle="small-modal"
            onClick={async (e) => {
              e.preventDefault()
              // location.href = "https://github.com"
              setIsModalOpen(!isModalOpen)
            }}
          >
            Reject Audit
          </button>

          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
          >
            Prize Pool: 69,420 OP
          </button>
        </div>
      </div>
      <div className="">
        <input
          type="number"
          min={0}
          step="any"
          className="w-[100%] my-4"
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
        />
        <button
          type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
          onClick={async () => {
            console.log(txt)
            const { hash } = await writeContract({
              address: AUDIT_REPORT,
              abi: AUDIT_REPORT_ABI,
              functionName: "verifyReport",
              args: [1, parseEther(txt)],
              // value: parseEther(amount),
            })
          }}
        >
          Disburse Bounty
        </button>
      </div>
    </div>
  )
}

export default Dashboard
