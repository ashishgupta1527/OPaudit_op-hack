import Link from "next/link"
import React from "react"

const Start = () => {
  const lol = [1, 2, 3]
  return (
    <>
      {lol.map((ele, idx) => {
        return (
          <Link
            key={idx}
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
        )
      })}
    </>
  )
}

export default Start
