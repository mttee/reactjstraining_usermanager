import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './data.json';
const uuidv1 = require('uuid/v1');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trangThaiForm: false,
      trangThaiEdit: false,
      data: [],
      searchText: "", //Khai báo để nó có gt rổng trước thì sẽ tìm ra tất cả dữ liệu, nếu ko khi vừa vào nó ko có dữ liệu dc tìm kiếm
      userEditObject: {}
    }
  }
  //Dùng hàm ComponentWillMount (luôn chạy trước render) để lưu vào localStorage dữ liệu của mình trước
  
  componentWillMount() {
    //Phải kiểm tra xem đã có set dữ liệu trước chưa
    if(localStorage.getItem('user') === null){
      localStorage.setItem('user',JSON.stringify(DataUser));
    }
    else{
      var temp2 = JSON.parse(localStorage.getItem("user"));
      this.setState({
        data: temp2
      });
    }
  }
  


  showformtucomponentcon = () => {
    this.setState({
      trangThaiForm: !this.state.trangThaiForm
    });
    
  }

  getTextSearch = (dl) => {
    //console.log("Nhận được: "+ dl);
    this.setState({
      searchText: dl
    });
    
  }

  //Lấy dữ liệu từ con Adduser lên
  getValueAdduser = (name,tel,permission) => {
    //Đóng gói thành một đối tượng
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = parseInt(permission); //Vì khi lấy giá trị từ input nó là string
    //Thêm vào csdl (data)
    var items = this.state.data;
    items.push(item);
    //Set lại state để nó xuất hiện
    this.setState({
      data: items
    });
    localStorage.setItem('user',JSON.stringify(items));
    console.log(items);

  }
  //Sửa
  editUser = (user) =>{
    this.setState({
      userEditObject: user
    });
    
  }
  setTrangThaiShowForm = () => {
    this.setState({
      trangThaiEdit: !this.state.trangThaiEdit
    });
  }
  getUserInfo = (info) => {
    this.state.data.forEach((value,key)=>{
      if(info.id === value.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
    localStorage.setItem('user',JSON.stringify(this.state.data));
  }
  //Xóa
  deleteUser = (id) => {
    //Ví dụ Filter
    // var arr = [1,2,3];
    // var x = 2;
    // arr = arr.filter(item => item !== x);
    // console.log(arr);
    
    var tempData = this.state.data;
    tempData.forEach((value,key)=>{
      if(value.id === id){
        tempData = tempData.filter(item => item.id !== id);
        this.setState({
          data: tempData
        });
        localStorage.setItem('user',JSON.stringify(tempData));
      }
    });
    
  }

  render() {
    
    var ketqua = [];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1){ //-1 là ko tìm thấy sẽ trả ra, nên mỉnh dùng khác -1 là tìm thấy
        ketqua.push(item);
      }
    })
    
    return (
      <div className="App">
        <Header/>
        <div className="searchForm mb-5">
          <div className="container">
            <div className="row">
              <Search ketnoi={()=>this.showformtucomponentcon()} trangthai={this.state.trangThaiForm} search={(dl)=>this.getTextSearch(dl)} trangThaiEdit={this.state.trangThaiEdit} trangThaiShowForm={this.setTrangThaiShowForm} userEdit={this.state.userEditObject} getUserInfo={(info) => this.getUserInfo(info)}/>
              <div className="col-12"><hr/></div>
              {/* <TableData DataUser={this.state.data}/> */}
              <TableData DataUser={ketqua} editFun={(user) => this.editUser(user)} trangThaiShowForm={this.setTrangThaiShowForm} deleteClick={(id)=>this.deleteUser(id)}/>
              <AddUser hienthiform={this.state.trangThaiForm} dulieu={(name,tel,permission) => this.getValueAdduser(name,tel,permission)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
