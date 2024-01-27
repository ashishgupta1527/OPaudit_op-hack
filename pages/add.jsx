import React, { useState } from "react"
import { useDebounce } from "use-debounce"
// import { usePrepareSendTransaction, useWaitForTransaction, useSendTransaction } from "wagmi"
import { writeContract } from "@wagmi/core"

import { AUDIT_REPORT, AUDIT_REPORT_ABI, CONTRACT_ADDRESS } from "../constants.js"
import { parseEther } from "viem"

const Add = () => {
  const [amount, setAmount] = useState("")
  const [gh, setGh] = useState("")
  const [result, setResult] = useState("")
  // const [debouncedAmount] = useDebounce(amount, 500)
  // const { config } = usePrepareSendTransaction({
  //   to: CONTRACT_ADDRESS,
  //   value: debouncedAmount ? parseEther(debouncedAmount) : undefined,
  // })

  // const { data, sendTransaction } = useSendTransaction(config)

  // const { isLoading, isSuccess } = useWaitForTransaction({
  //   hash: data?.hash,
  // })

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
          functionName: "registerProject",
          args: [parseEther(amount), gh],
          value: parseEther(amount),
        })

        console.log(hash)
        setResult(hash)
      }}
    >
      <p>Add Logo</p>
      <input type="file" />
      <p>Project Name</p>
      <input type="text" />
      <p>Description</p>
      <textarea name="" id="" cols="50" rows="5"></textarea>
      <p>Add GitHub</p>
      <input type="text" value={gh} onChange={(e) => setGh(e.target.value)} />
      <p>Prize Pool</p>
      <input
        aria-label="Amount (ether)"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="0.05"
        value={amount}
        type="number"
        min="0"
        step="any"
      />{" "}
      <br />
      <input
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        value={"Submit"}
      />
      {result && (
        <div>
          Successfully deposited {amount} ether
          <div>
            <a href={`https://sepolia-optimism.etherscan.io/tx/${result}`}>Etherscan</a>
          </div>
        </div>
      )}
    </form>
  )
}

export default Add
