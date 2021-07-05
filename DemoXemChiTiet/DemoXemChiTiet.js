import React, { Component } from "react";
import Carts from "./Carts";
import Cartt from "./Cartt";
export default class DemoXemChiTiet extends Component {
  mangSP = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    gioHang: [
    ]
  };

  themGioHang = (spClick) => {
    let spGioHang = { ...spClick, soLuong: 1 };
    
    let gioHangCapNhat = [...this.state.gioHang];

    // //Kiểm tra xem đã có sản phẩm chưa
    let sp = gioHangCapNhat.find(spGH => spGH.maSP === spGioHang.maSP);

    if(sp){
      sp.soLuong +=1;
    }else{
      gioHangCapNhat.push(spGioHang);
    }


    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  xoaGioHang =(maSP) =>{
    let gioHangCapNhat = [...this.state.gioHang];

    let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSP);

    console.log('index',index);

    if(index !== -1){
      gioHangCapNhat.splice(index,1);  
    }

    this.setState({
      gioHang:gioHangCapNhat 
    })
  }

  xemChiTiet = (SP)=>{
    console.log('check',SP);
    this.setState({
      sanPhamChiTiet:SP
    })
  }

  tangGiamSoLuong=(maSP,soLuong)=>{
    console.log('MaSP : ', soLuong);

    let gioHangCapNhat = [...this.state.gioHang];

    let spGH = gioHangCapNhat.find(spGH => spGH.maSP === maSP);

    if(spGH){
      spGH.soLuong+= soLuong;
    }

    this.setState({
      gioHang:gioHangCapNhat
    })

    if(spGH.soLuong===0){
      alert('Sản phẩm tối đa là 1 !!!')
      spGH.soLuong +=1;
      this.setState({
        gioHang:gioHangCapNhat
      })
    }
  }


  renderSP = () => {
    const jsx = this.mangSP.map((SP, index) => {
      return (
        <div className="col-4" key={index}>
          <Carts
            sp={SP}
            xemChiTiet={this.xemChiTiet}
            themGioHang={this.themGioHang}
          />
        </div>
      );
    });

    return jsx;
  };

  render() {
    let SPchiTiet = this.state.sanPhamChiTiet;
    return (
      <div className="container">
        <h3 className="mb-5">Danh sách sản phẩm</h3>
        <Cartt gioHang={this.state.gioHang} 
        xoaGH ={this.xoaGioHang}
        tangGiamSoLuong = {this.tangGiamSoLuong}
        />
        <div className="row mb-5">{this.renderSP()}</div>
        <div className="row">
          <div className="col-4">
            <h3>{SPchiTiet.tenSP} </h3>
            <img src={SPchiTiet.hinhAnh} style={{ width: "350px" }}></img>
          </div>
          <div className="col-8">
            <h3 className="mb-5">Thông số kĩ thuật</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <th>{SPchiTiet.manHinh}</th>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <th>{SPchiTiet.heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <th>{SPchiTiet.cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <th>{SPchiTiet.cameraSau}</th>
                </tr>
                <tr>
                  <th>Ram</th>
                  <th>{SPchiTiet.ram}</th>
                </tr>
                <tr>
                  <th>Rom</th>
                  <th>{SPchiTiet.rom}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
