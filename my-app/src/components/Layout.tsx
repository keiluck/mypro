import Link from "next/link"
import { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link href="/">首页</Link> |{" "}
        <Link href="/product">商品</Link> |{" "}
        <Link href="/cart">购物车</Link>
      </header>
      <main style={{ padding: "10px" }}>{children}</main>
      <footer style={{ padding: "10px", borderTop: "1px solid #ccc" }}>
        © 2025 MyShop
      </footer>
    </div>
  )
}
