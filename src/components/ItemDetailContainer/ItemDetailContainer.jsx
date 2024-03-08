import { useEffect, useState } from "react"
import { getProductById } from "../../products/productMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const { productId } = useParams()
    const id = parseInt(productId)
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const targetProduct = async function () {
            const item = await getProductById(id)
            return setProduct(item)
        }
        targetProduct()
    }, [id])
    console.log(product)
    return (
        <>
            {product && <ItemDetail {...product} />}
        </>
    )
}

export default ItemDetailContainer