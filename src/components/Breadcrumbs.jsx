// src/UI/Breadcrumbs.jsx
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter(x => x)

  return (
    <nav className="text-sm pt-4">
      <ol className="list-reset flex flex-wrap text-gray-600">
        <li>
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = '/' + pathnames.slice(0, index + 1).join('/')
          const isLast = index === pathnames.length - 1

          return (
            <li key={routeTo} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-800 capitalize">{name}</span>
              ) : (
                <Link to={routeTo} className="text-blue-600 hover:underline capitalize">
                  {name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
