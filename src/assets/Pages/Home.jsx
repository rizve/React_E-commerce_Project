import { useEffect, useState } from "react"
import Card from "../cmp/Card/Card"
import Slider from "../cmp/Navber/Slider/Slider"
import SectionTitle from "../cmp/SectionTitle/SectionTitle"
import { Link } from "react-router-dom"
import Loader from "../cmp/Loader/Loader"
import FooderTwo from "../cmp/FooterTwo/FooderTwo"
function Home() {

  const [Product, AllProduct] = useState([])
  const [loding, setloading] = useState(null)
  useEffect(() => {
    fetchProduct()
  }, [])

  const fetchProduct = async () => {
    setloading(true)
    const Product = await fetch("https://fakestoreapi.com/products")
    const result = await Product.json()
    const populerProduct = result.slice(0, 5)
    AllProduct(populerProduct)
    setloading(false)
  }


  return (
    <div>
      <Slider />
      <section className="container mx-auto mt-6">
        <SectionTitle mainTitle="PRODUCTS" />
      </section>
      <hr />
      <section className="flex flex-wrap justify-center gap-3">

        {
          loding ? <Loader/> : <>
            {
              
              Product.map((eachproduct, i) => <Card key={i}
              ProductInfo = {eachproduct} />)
              
            }
          </>
        }
         
      </section>
        

      <div className="flex justify-center mt-5">
        
        <Link to={"/shop"}>
         
          <button className="btn bg--400 text-black hover:text-red ">See More</button>
        </Link>
      </div>
      <br />
      <hr />
      <FooderTwo />
    </div>
  )
}

export default Home