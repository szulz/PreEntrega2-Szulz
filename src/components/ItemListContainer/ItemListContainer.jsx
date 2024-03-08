import { useState, useEffect } from "react"
import { getProductByCategory, getProductById, getProducts } from "../../products/productMock"
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getAll = async () => {
            const items = await getProducts()
            setProducts(items)
        }
        getAll()
    }, [])

    return (
        <>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer