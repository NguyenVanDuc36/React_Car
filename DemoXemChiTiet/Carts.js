import React, { Component } from "react";

export default class Carts extends Component {
  render() {
      let SP = this.props.sp;
    return (
      <div className="card bg-dark text-white" style={{width:'300px',margin:'0 auto'}}>
        <img src={SP.hinhAnh} alt="..."></img>
        <div className="card-body text-left">
          <p>{SP.tenSP}</p>
          <p>{SP.giaBan.toLocaleString()}</p>
          <button
            onClick={() => {
              this.props.xemChiTiet(SP);
            }}
            className="btn btn-success"
          >
            Xem chi tiết
          </button>
          <button className="btn btn-danger ml-2" onClick={() =>{
            this.props.themGioHang(SP);
          }}>Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}
