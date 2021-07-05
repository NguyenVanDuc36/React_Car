import React, { Component } from 'react'
import SanPhamCar from './SanPhamCar';
export default class XemChiTietCar extends Component {

    products = [
        { id: 1, name: 'black car', img: './img/CarBasic/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './img/CarBasic/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './img/CarBasic/products/silver-car.jpg', price: 3000 },
        { id: 4, name: 'Steel car', img: './img/CarBasic/products/steel-car.jpg', price: 4000 }
    ];


    renderCar = ()=>{
        const jsx =  this.products.map((sp,index)=>{
            return <div className="col-3" key={sp.id}><SanPhamCar sanPhamCar = {sp}/></div>
        })

        return jsx;
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-left">Danh sách xe</h3>
                <div className="row">
                    {this.renderCar()}
                </div>
            </div>
        )
    }
}
