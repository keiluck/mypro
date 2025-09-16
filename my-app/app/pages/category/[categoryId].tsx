import { useRouter } from 'next/router'
import React from 'react'

const CategoryPage = () => {
  const router = useRouter()
  const { categoryId } = router.query

  return (
    <div>
      <h1>Category: {categoryId}</h1>
      {/* Here you would typically fetch and display products based on the categoryId */}
    </div>
  )
}

export default CategoryPage