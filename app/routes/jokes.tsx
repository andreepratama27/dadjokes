import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { API_URL } from '../utils'

export const loader: LoaderFunction = async () => {
  try {
    const response = await fetch(API_URL as string)
    const result = await response.json()

    if (!result.success) throw new Error('Failed to fetch API')

    const [data] = result.body

    return data
  } catch (error) {
    console.error(error)
  }
}

export default function Jokes() {
  const { setup, punchline } = useLoaderData()

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-center bg-violet-900">
      <div className="container p-16">
        <p className='text-lg text-orange-300'>{setup}</p>
        <p className="text-lg font-bold text-orange-300">{punchline}</p>
      </div>

      <footer className="absolute text-sm text-white opacity-40 bottom-4">
        Powered by Remix
      </footer>
    </div>
  );
}