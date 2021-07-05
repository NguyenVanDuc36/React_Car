import React, { Component } from 'react'
import ModelCar from './ModelCar';

export default class SanPhamCar extends Component {

    state ={
        spModel: {},
    }

    xemChiTiet = (SP)=>{
        this.setState({
          spModel:SP
        })
        console.log('CheckState',SP);
      }
    


    render() {
        let {sanPhamCar} = this.props;
        return (
            <div className="card text-left">
                <div className="card-header p-0">
                    <img src={sanPhamCar.img} alt="..."style={{width:'100%'}}></img>
                </div>
                <div className="card-body">
                    <h3>{sanPhamCar.name}</h3>
                    <p>{sanPhamCar.price}</p>
                    <button className="btn btn-success" data-toggle="modal" data-target={`#myModal${sanPhamCar.id}`} 
                    onClick={()=>
                        {this.xemChiTiet(sanPhamCar);
                        }}
                    >Xem chi tiết</button>   
                    <ModelCar sp={this.state.spModel}/> 
                </div>
            </div>
            
        )
        
    }
    
}
