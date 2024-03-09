import { useState, useEffect } from "react"
import { getProductByCategory, getProductById, getProducts } from "../../products/productMock"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fileredProducts = async () => {
            if (categoryId == undefined) {
                const items = await getProducts()
                setProducts(items)
            } else {
                const items = await getProductByCategory(categoryId)
                setProducts(items)
            }
        }
        fileredProducts()
    }, [categoryId])
    return (
        <>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer