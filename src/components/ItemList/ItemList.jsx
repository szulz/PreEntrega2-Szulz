import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <>
            {products.map( prod => {
                return <Item key={prod.id} {...prod}/>
            })}
        </>
    )
}


export default ItemList