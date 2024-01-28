import Link from "next/link"
import React, { useState } from "react"

const Start = () => {
  const lol = [1, 2, 3]
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {isModalOpen && (
        <div className="text-center mt-4">
          <a href="https://optimism-sepolia.blockscout.com/token/0xe58BB03403Fa940Ae376A1829AC6B2F9765dFFDD?tab=holders">
            1. asshish
          </a>{" "}
          <br />
          <a href="https://optimism-sepolia.blockscout.com/token/0xe58BB03403Fa940Ae376A1829AC6B2F9765dFFDD?tab=holders">
            2. manon
          </a>{" "}
          <br />
          <a href="https://optimism-sepolia.blockscout.com/token/0xe58BB03403Fa940Ae376A1829AC6B2F9765dFFDD?tab=holders">
            3. aritra
          </a>{" "}
          <br />
          <a href="https://optimism-sepolia.blockscout.com/token/0xe58BB03403Fa940Ae376A1829AC6B2F9765dFFDD?tab=holders">
            4. bhau
          </a>
        </div>
      )}
      {/* {lol.map((ele, idx) => { */}
      {/* return ( */}
      <>
        <Link
          // key={idx}
          className="max-w-3xl mx-auto p-4 border-2 rounded-md flex justify-between my-8"
          href={{ pathname: "/submit", query: { name: "0xfable" } }}
        >
          <div className="flex items-center">
            <img
              src="https://app.onlydust.com/cdn-cgi/image/width=100/https://onlydust-app-images.s3.eu-west-1.amazonaws.com/7438838290721404893.jpg"
              alt=""
              width="50px"
              className="rounded-lg"
            />
            <p className="mx-2"> OxFable</p>
          </div>
          <div className="space-y-4">
            <p className="max-w-96">
              0xFable is a fully on-chain trading card game, in the spirit of Magic the Gathering
              and Hearthstone.
            </p>
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
              onClick={(e) => {
                e.preventDefault()
                location.href = "https://github.com"
              }}
            >
              Source Code
            </button>
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
              data-modal-target="small-modal"
              data-modal-toggle="small-modal"
              onClick={(e) => {
                e.preventDefault()
                // location.href = "https://github.com"
                setIsModalOpen(!isModalOpen)
              }}
            >
              4 Contributors
            </button>

            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
            >
              Prize Pool: 69,420 OP
            </button>
          </div>
        </Link>
        <Link
          // key={idx}
          className="max-w-3xl mx-auto p-4 border-2 rounded-md flex justify-between my-8"
          href={{ pathname: "/submit", query: { name: "0xfable" } }}
        >
          <div className="flex items-center">
            <img
              src="https://app.onlydust.com/cdn-cgi/image/width=100/https://onlydust-app-images.s3.eu-west-1.amazonaws.com/13731871563523322095.png"
              alt=""
              width="50px"
              className="rounded-lg"
            />
            <p className="mx-2">Cannon-RS</p>
          </div>
          <div className="space-y-4">
            <p className="max-w-96">
              Cannon-rs aims to support the emerging number of projects using Rust to develop
              provable programs for Optimism Cannon
            </p>
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
              onClick={(e) => {
                e.preventDefault()
                location.href = "https://github.com"
              }}
            >
              Source Code
            </button>
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
              data-modal-target="small-modal"
              data-modal-toggle="small-modal"
              onClick={(e) => {
                e.preventDefault()
                // location.href = "https://github.com"
                setIsModalOpen(!isModalOpen)
              }}
            >
              7 Contributors
            </button>

            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
            >
              Prize Pool: 6420 OP
            </button>
          </div>
        </Link>
        <Link
          // key={idx}
          className="max-w-3xl mx-auto p-4 border-2 rounded-md flex justify-between my-8"
          href={{ pathname: "/submit", query: { name: "0xfable" } }}
        >
          <div className="flex items-center">
            <img
              src="https://app.onlydust.com/cdn-cgi/image/width=100/https://onlydust-app-images.s3.eu-west-1.amazonaws.com/15130704517388153023.jpg"
              alt=""
              width="50px"
              className="rounded-lg"
            />
            <p className="mx-2">Concrete</p>
          </div>
          <div className="space-y-4">
            <p className="max-w-96">
              Concrete blockchains are general-purpose EVM rollups that have been enhanced at the
              protocol level to meet the needs of a specific use case, like expensive cryptography,
              spatial indexing, or complex digital physics.
            </p>
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
              onClick={(e) => {
                e.preventDefault()
                location.href = "https://github.com"
              }}
            >
              Source Code
            </button>
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
              data-modal-target="small-modal"
              data-modal-toggle="small-modal"
              onClick={(e) => {
                e.preventDefault()
                // location.href = "https://github.com"
                setIsModalOpen(!isModalOpen)
              }}
            >
              2 Contributors
            </button>

            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
            >
              Prize Pool: 90 OP
            </button>
          </div>
        </Link>
      </>
      {/* )})} */}
    </>
  )
}

export default Start
