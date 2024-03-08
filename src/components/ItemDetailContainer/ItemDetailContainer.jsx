import { useEffect, useState } from "react"
import { getProductById } from "../../products/productMock"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = ({ id }) => {
    const [product, setProduct] = useState(null)
    useEffect(() => {
        const targetProduct = async function () {
            const item = await getProductById(id)
            return setProduct(item)
        }
        targetProduct()
    }, [id])
    return (
        <>
            {product && <ItemDetail {...product} />} 
        </>
    )
}

export default ItemDetailContainer