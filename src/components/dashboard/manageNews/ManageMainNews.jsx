import React from 'react'
import { Link } from 'react-router-dom'

export default function ManageMainNews() {
  return (
    <>
      <div className="mx-auto">
        <Link to="add" className="p-2 bg-blue-500 text-white rounded-md">Add News</Link>
      </div>
    </>
  )
}
