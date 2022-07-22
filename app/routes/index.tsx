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

export default function Index() {
  const { setup, punchline } = useLoaderData()

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col text-center">
      <div className="container p-16">
        <p className='text-lg'>{setup}</p>
        <p className="text-lg">{punchline}</p>
      </div>
    </div>
  );
}
