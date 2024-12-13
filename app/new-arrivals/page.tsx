import React from 'react'
import { products } from '../../data/ProductItems'
import CategoriesList from '../component/CategoriesList'

const NewArrivals = () => {
    const newArrivals = products.filter((product) => product.id >= Math.random() * 100).slice(0, 5)
    return (
        <CategoriesList categories={newArrivals} title='New Arrivals' />
    )
}

export default NewArrivals