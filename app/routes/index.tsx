import { NavLink } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-violet-900">
      <div className="container p-16 text-center">
        <p className="text-5xl font-bold text-orange-300 drop-shadow-sm">
          Dad Jokes Collections
        </p>

        <div className="flex items-center justify-center pt-4 link-section">
          <NavLink to="jokes" className="text-orange-300 hover:underline hover:italic">
            Open Here
          </NavLink>

          <div className="w-2 h-2 mx-2 bg-gray-400 rounded-full"></div>

          <NavLink to="jokes" className="text-orange-300 hover:underline hover:italic">
            Show Collections
          </NavLink>
        </div>
      </div>
    </div>
  )
}