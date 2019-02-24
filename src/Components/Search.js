import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    hienThiNut = () => {
        if(this.props.trangthai === true){
            return <div className="btn btn-block btn-outline-secondary mt-3" onClick={this.props.ketnoi}>Đóng lại</div>;
        }
        else{
            return <div className="btn btn-block btn-outline-info mt-3" onClick={this.props.ketnoi}>Thêm mới User</div>;
        }
    }
    isChange = (event) => {
        console.log(event.target.value);
        // this.setState({
        //     tempValue: event.target.value
        // });
        //Thay vì lưu vào state thì ta có thể đưa trực tiếp vào hàm luôn như phía dưới
        
        this.props.search(event.target.value);
    }
    //Show form sửa khi Click
    showFormEdit = () => {
        if(this.props.trangThaiEdit === true){
            return(
                <EditUser trangThaiShowForm={this.props.trangThaiShowForm} userEdit={this.props.userEdit} getUserEditInfo={(info)=>this.getUserEditInfo(info)}/>
            );
        }
    }
    //Lấy giá trị từ Edituser
    getUserEditInfo = (info) => {
        // this.setState({
        //     userObj: info
        // });
        
        this.props.getUserInfo(info)
    }
    render() {
        return (
            <div className="col-12">
                <div className="row">
                    {this.showFormEdit()}
                </div>
                <div className="form-group">
                    <div className="btn-group" style={{width: '100%'}}>
                        <input type="text" onChange={(event) => this.isChange(event)} className="form-control" aria-describedby="helpId" placeholder="Nhập tên muốn tìm kiếm" defaultValue={this.state.tempValue} />
                        {/* <div className="btn btn-info" onClick={() => this.props.search(this.state.tempValue)}>Tìm</div> */}
                    </div>
                        {this.hienThiNut()}
                        
                </div>
            </div>
        );
    }
}

export default Search;