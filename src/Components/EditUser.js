import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        //Phải khai báo state để có giá trị ban đầu phòng khi chỉ có thay đổi một trướng rồi sao
        this.state = {
            id: this.props.userEdit.id,
            name: this.props.userEdit.name,
            tel: this.props.userEdit.tel,
            permission: this.props.userEdit.permission,
        }
    }
    

    //Lấy giá trị các thẻ input
    isChange = (event) => {
        const ten = event.target.name;
        const giatri = event.target.value;
        console.log(giatri);
        this.setState({
            [ten]:giatri
        });
        
    }
    //Khi clik nut hoàn thành sửa
    hoanThanhSua = () => {
        this.props.trangThaiShowForm();

        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;

        this.props.getUserEditInfo(info);
    }

    render() {
        var user = this.props.userEdit;   
        
        
        return (
            <div className="col">
            <form>
        <div className="card text-white bg-secondary mb-3 mt-2">
        <div className="card-header text-center">Sửa User</div>
        <div className="card-body text-primary">
            <div className="form-group">
            <input type="text" onChange={(event)=> this.isChange(event)} defaultValue={user.name}  name="name" className="form-control"  aria-describedby="helpId" placeholder="User name" />
            <hr />
            </div>
            <div className="form-group">
            <input type="text" onChange={(event)=> this.isChange(event)} defaultValue={user.tel} name="tel" className="form-control"  aria-describedby="helpId" placeholder="Phone" />
            <hr />
            </div>
            <div className="form-group">
            <div className="input-group mb-3">
                <select defaultValue={user.permission} onChange={(event)=> this.isChange(event)} name="permission" className="custom-select" id="inputGroupSelect01">
                    <option value={1}>Admin</option>
                    <option value={2}>Moderator</option>
                    <option value={3}>Normal</option>
                </select>
            </div>
            </div>
            <div className="form-group">
                <input onClick={this.hoanThanhSua} className="btn btn-block btn-primary" defaultValue="Hoàn thành sửa"/>
            </div>
        </div>
        </div>
        </form>
        </div> 
        );
    }
}

export default EditUser;