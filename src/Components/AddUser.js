import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai: false,
            name:"",
            tel:"",
            permission:""
        }
    }

    hienThiNut = () => {
        if(this.state.trangThai === true){
            return(
             <div className="btn btn-block btn-outline-secondary" onClick={this.setTrangThai}>Đóng lại</div>
            )
        }
        else{
            return(
                <div className="btn btn-block btn-outline-info" onClick={this.setTrangThai}>Thêm mới</div> 
            )
        }
    }
    setTrangThai = () => {
        //Thay vì dùng if else ta có thể dùng phủ định gọn hơn nhé
            this.setState({trangThai: !this.state.trangThai});
    }

    // hienThiForm = () => {
    //     if(this.state.trangThai === true){
    //         return(
    //         <div className="card border-primary mb-3 mt-2" style={{maxWidth: '18rem'}}>
    //         <div className="card-header text-center">Thêm mới User</div>
    //         <div className="card-body text-primary">
    //             <div className="form-group">
    //             <h6 className="card-title">User:</h6>
    //             <input type="text" className="form-control"  aria-describedby="helpId" placeholder="User name" />
    //             <hr />
    //             </div>
    //             <div className="form-group">
    //             <h6 className="card-title">Điện thoại:</h6>
    //             <input type="text" className="form-control"  aria-describedby="helpId" placeholder="Phone" />
    //             <hr />
    //             </div>
    //             <div className="form-group">
    //             <h6 className="card-title">Jurisdiction:</h6>
    //             <div className="input-group mb-3">
    //                 <select className="custom-select" id="inputGroupSelect01">
    //                 <option value = "selected">Choose...</option>
    //                 <option value={1}>Admin</option>
    //                 <option value={2}>Moderator</option>
    //                 <option value={3}>Normal</option>
    //                 </select>
    //             </div>
    //             </div>
    //             <div className="form-group">
    //             <div className="btn btn-block btn-primary">Thêm</div>
    //             </div>
    //         </div>
    //         </div>
    //         )
    //     }
    // }
    
    //Lấy giá trị của các trường
    getValue = (event) => {
        const ten = event.target.name;
        const giatri = event.target.value;
        this.setState({
            [ten] : giatri
        });  
    }


    // Kiểm tra state của thằng bố truyền qua thay vì dùng luôn trong state
    kiemTraStateCuaBo = () => {
        if(this.props.hienthiform === true){
            return(
                <div className="col">
                <form>
            <div className="card border-primary mb-3 mt-2" style={{maxWidth: '18rem'}}>
            <div className="card-header text-center">Thêm mới User</div>
            <div className="card-body text-primary">
                <div className="form-group">
                <h6 className="card-title">User:</h6>
                <input type="text" onChange={(event) => this.getValue(event)} name="name" className="form-control"  aria-describedby="helpId" placeholder="User name" />
                <hr />
                </div>
                <div className="form-group">
                <h6 className="card-title">Điện thoại:</h6>
                <input type="text" onChange={(event) => this.getValue(event)} name="tel" className="form-control"  aria-describedby="helpId" placeholder="Phone" />
                <hr />
                </div>
                <div className="form-group">
                <h6 className="card-title">Jurisdiction:</h6>
                <div className="input-group mb-3">
                    <select onChange={(event) => this.getValue(event)} name="permission" className="custom-select" id="inputGroupSelect01">
                    <option value ="selected">Choose...</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Moderator</option>
                    <option value={3}>Normal</option>
                    </select>
                </div>
                </div>
                <div className="form-group">
                    <input type="reset" className="btn btn-block btn-primary" onClick={(name,tel,permission) => this.props.dulieu(this.state.name, this.state.tel,this.state.permission)} value="Thêm mới"/>
                </div>
            </div>
            </div>
            </form>
            </div>
            )
        }
    }

    render() {
        return (
                <div className="card text-left">
                    {/* Gọi hàm hiển thị nút */}
                    {/* {this.hienThiNut()}
                    {this.hienThiForm()} */}

                    
                {/* Dùng nút ở component khác */}
                    {this.kiemTraStateCuaBo()}
                </div>

        );
    }
}

export default AddUser;