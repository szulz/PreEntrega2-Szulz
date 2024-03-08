/*
category: 
1 Sports
2 Health
3 Technology
4 Food
*/

const products = [
    {
        title: 'Producto',
        image: 'https://placehold.co/200x200/png',
        price: 33,
        description: 'Este es el producto numero 1',
        categoryId: 1,
        id: 1,
        stock: 20
    },
    {
        title: 'Producto 2',
        image: 'https://placehold.co/200x200/png',
        price: 155,
        description: 'Este es el producto numero 2',
        categoryId: 3,
        id: 2,
        stock: 41
    },
    {
        title: 'Producto 3',
        image: 'https://placehold.co/200x200/png',
        price: 99,
        description: 'Este es el producto numero 3',
        categoryId: 4,
        id: 3,
        stock: 1
    },
    {
        title: 'Producto 4',
        image: 'https://placehold.co/200x200/png',
        price: 748,
        description: 'Este es el producto numero 4',
        categoryId: 2,
        id: 4,
        stock: 8
    },
    {
        title: 'Producto 5',
        image: 'https://placehold.co/200x200/png',
        price: 45,
        description: 'Este es el producto numero 5',
        categoryId: 1,
        id: 5,
        stock: 7
    },
    {
        title: 'Producto 6',
        image: 'https://placehold.co/200x200/png',
        price: 101,
        description: 'Este es el producto numero 6',
        categoryId: 4,
        id: 6,
        stock: 3
    },
    {
        title: 'Producto 7',
        image: 'https://placehold.co/200x200/png',
        price: 456,
        description: 'Este es el producto numero 7',
        categoryId: 2,
        id: 7,
        stock: 15
    },
    {
        title: 'Producto 8',
        image: 'https://placehold.co/200x200/png',
        price: 500,
        description: 'Este es el producto numero 8',
        categoryId: 3,
        id: 8,
        stock: 5
    },
    {
        title: 'Producto 9',
        image: 'https://placehold.co/200x200/png',
        price: '1000',
        description: 'Este es el producto numero 9',
        categoryId: 1,
        id: 9,
        stock: 10
    }
]

export async function getProducts() {
    return products
}

export async function getProductById(id) {
    const productsId =  products.find(prod => prod.id === id)
    return productsId
}

export async function getProductByCategory(id) {
    const productsCategory =  products.find(prod => prod.categoryId === id)
    return productsCategory
}
