import { useEffect, useState } from "react"
import Card from "../cmp/Card/Card"
import Loader from "../cmp/Loader/Loader"
import FooderTwo from "../cmp/FooterTwo/FooderTwo"
import SectionTitle from "../cmp/SectionTitle/SectionTitle"

function Shop() {

  const [Product, AllProduct] = useState([])
  const [loding, setloading] = useState(null)
  useEffect(() => {
    fetchProduct()
  }, [])

  const fetchProduct = async () => {
    setloading(true)
    const Product = await fetch("https://fakestoreapi.com/products")
    const result = await Product.json()
    const populerProduct = result
    AllProduct(populerProduct)
    setloading(false)
  }
  return (

    <div>
      <br />
      <hr />
      <br />
      <SectionTitle mainTitle="PRODUCTS" />
      <section className="flex flex-wrap justify-center gap-3">

        {
          loding ? <Loader /> : <>
            {

              Product.map((eachproduct, i) => <Card key={i}
                ProductInfo={eachproduct} />)
            }
          </>
        }
      </section>
      <br />
      <hr />
      <FooderTwo />
    </div>
  )
}

export default Shop