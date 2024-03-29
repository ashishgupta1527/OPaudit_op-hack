import { ConnectButton } from "@rainbow-me/rainbowkit"
import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>OPAudits</title>
        <meta content="Generated by @rainbow-me/create-rainbowkit" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="flex items-center justify-center p-10">
        <Link href="/start">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Start Auditing
          </button>
        </Link>
        <Link href="/add">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add Project
          </button>
        </Link>
        <Link href="/submit">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit Report
          </button>
        </Link>
      </main>

      {/* Leaderboard */}
      <div className="max-w-[56em] text-center m-4 mx-auto">
        <h2 className="font-bold my-2">Leaderboard</h2>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg text-center">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Rank
                </th>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Num of Contributions
                </th>
                <th scope="col" className="px-6 py-3">
                  OP Earned
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td>
                  <a
                    className="px-6 py-4"
                    href="https://optimism-sepolia.blockscout.com/token/0xe58BB03403Fa940Ae376A1829AC6B2F9765dFFDD?tab=holders"
                  >
                    aritra
                  </a>
                </td>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4">10 OP</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2
                </th>
                <td>
                  <a
                    className="px-6 py-4"
                    href="https://optimism-sepolia.blockscout.com/token/0xe58BB03403Fa940Ae376A1829AC6B2F9765dFFDD?tab=holders"
                  >
                    asshish
                  </a>
                </td>
                <td className="px-6 py-4">7</td>
                <td className="px-6 py-4">19 OP</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  3
                </th>
                <td>
                  <a
                    className="px-6 py-4"
                    href="https://optimism-sepolia.blockscout.com/token/0xe58BB03403Fa940Ae376A1829AC6B2F9765dFFDD?tab=holders"
                  >
                    manon
                  </a>
                </td>
                <td className="px-6 py-4">8</td>
                <td className="px-6 py-4">56 OP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
