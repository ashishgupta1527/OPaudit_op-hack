import { useSearchParams } from "next/navigation"
import React from "react"
import { writeContract } from "@wagmi/core"
import { AUDIT_REPORT, AUDIT_REPORT_ABI } from "../constants"
// import {parseEther} from "viem"

const Submit = () => {
  const projectId = 1

  const searchParams = useSearchParams()
  const name = searchParams.get("name")
  return (
    <form
      className="space-y-4 m-4 mx-auto text-center border-2 max-w-[60rem] rounded-lg p-4"
      onSubmit={async (e) => {
        e.preventDefault()
        // console.log(amount)
        // sendTransaction?.()
        const { hash } = await writeContract({
          address: AUDIT_REPORT,
          abi: AUDIT_REPORT_ABI,
          functionName: "submitReport",
          args: [projectId, "x.co"],
          // value: parseEther(amount),
        })

        console.log(hash)
      }}
    >
      <p>Project Name</p>
      <input type="text" defaultValue={name ? name : ""} />
      <p>Add Audit Description</p>
      <textarea name="" id="" cols={50} rows={5}></textarea>
      <p>Add Audit Report</p>
      <input type="file" />
      <p>Add GitHub</p>
      <input type="text" />
      <p>Severity of issue: (1-10)</p>
      <input type="number" min={0} max={10} /> <br />
      <input
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        value={"Submit"}
      />
    </form>
  )
}

export default Submit
