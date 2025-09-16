import { useRouter } from "next/router"
import Layout from "../../../../src/components/Layout"

const sampleProducts = [
  { id: 1, name: "无线耳机", price: 799 },
  { id: 2, name: "运动T恤", price: 129 },
]

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const product = sampleProducts.find((p) => p.id.toString() === id)

  if (!product) return <Layout>商品不存在</Layout>

  return (
    <Layout>
      <h2>{product.name}</h2>
      <p>价格：¥{product.price}</p>
      <p>这里展示更多商品详情...</p>
    </Layout>
  )
}
