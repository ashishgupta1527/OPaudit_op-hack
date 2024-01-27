import React, { useState } from "react"
import { useDebounce } from "use-debounce"
import { usePrepareSendTransaction, useWaitForTransaction, useSendTransaction } from "wagmi"
import { CONTRACT_ADDRESS } from "../constants.js"
import { parseEther } from "viem"

const Add = () => {
  const [amount, setAmount] = useState("")
  const [debouncedAmount] = useDebounce(amount, 500)
  const { config } = usePrepareSendTransaction({
    to: CONTRACT_ADDRESS,
    value: debouncedAmount ? parseEther(debouncedAmount) : undefined,
  })

  const { data, sendTransaction } = useSendTransaction(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  return (
    <form
      className="space-y-4 m-4 mx-auto text-center border-2 max-w-[60rem] rounded-lg p-4"
      onSubmit={(e) => {
        e.preventDefault()
        console.log(amount)
        sendTransaction?.()
      }}
    >
      <p>Add Logo</p>
      <input type="file" />
      <p>Project Name</p>
      <input type="text" />
      <p>Description</p>
      <textarea name="" id="" cols="50" rows="5"></textarea>
      <p>Add GitHub</p>
      <input type="text" />
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
      {isSuccess && (
        <div>
          Successfully deposited {amount} ether
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
    </form>
  )
}

export default Add
