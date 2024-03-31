import { useState, useEffect } from "react"
import { getProductByCategory, getProductById, getProducts } from "../../products/productMock"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/fireBase";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
    const collectionRef = collection(db, 'products')
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    /*
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
    */

    useEffect(() => {
        async function getCollectionProds() {
            const prod = await getDocs(collectionRef)
            console.log(prod)
            console.log('test')
        }
        getCollectionProds()
    })
    return (
        <>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer