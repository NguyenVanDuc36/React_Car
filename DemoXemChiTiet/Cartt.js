import React, { Component } from "react";

export default class Cartt extends Component {

  renderGioHang = () =>{
    let {gioHang} = this.props;
    let {xoaGH} = this.props;
    console.log('check',gioHang);
    return gioHang.map((spGioHang,index)=>{
        return  <tr key={index}>
                    <td>{spGioHang.maSP}</td>
                    <td>{spGioHang.tenSP}</td>
                    <td><img src={spGioHang.hinhAnh} width={50} height={50}></img></td>
                    <td>{spGioHang.giaBan}</td>
                    <td>
                      <button onClick={()=>{this.props.tangGiamSoLuong(spGioHang.maSP,1)}} className="btn btn-success mr-2" >+</button>
                      {spGioHang.soLuong}
                      <button onClick={()=>{this.props.tangGiamSoLuong(spGioHang.maSP,-1)}} className="btn btn-success ml-2"> - </button>
                    </td>
                    <td>{spGioHang.soLuong*spGioHang.giaBan}</td>
                    <td><button onClick={()=>{this.props.xoaGH(spGioHang.maSP)}} className="btn btn-danger">Xóa</button></td>
                </tr>
    })
  }


  render() {
    return (
      <div style={{textAlign:'right'}}>
        {/* Button to Open the Modal */}
        <p className="btn"
          data-toggle="modal"
          data-target="#myModal"
        >
          Giỏ hàng (0)
        </p>
        {/* The Modal */}
        <div className="modal fade" id="myModal">
          <div className="modal-dialog  modal-lg">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Giỏ hàng</h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Tên sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Đơn giá</th>
                      <th>Số lượng</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderGioHang()}
                  </tbody>
                </table>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
