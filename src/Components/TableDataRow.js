import React, { Component } from 'react';

class TableDataRow extends Component {
    permission = () => {
        if(this.props.permission === 1){ return "Admin";}
        else if(this.props.permission === 2){ return "Moderator";}
        else{ return "User Normal";}
    }
    //Gọi phần sửa
    editClick = () => {
        this.props.editFunClick();
        this.props.trangThaiShowForm();
    }
    //Xóa
    deleteClick = (id) => {
        this.props.deleteClick(id);
        
    }
    render() {
        return (
                <tr>
                    <td>{this.props.stt +1}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.tel}</td>
                    <td>{this.permission()}</td>
                    <td>
                    <div className="btn btn-group">
                        <div className="btn btn-warning sua" onClick={this.editClick}><i className="fa fa-edit "/> Sửa</div>
                        <div className="btn btn-danger xoa" onClick={(id) => this.deleteClick(this.props.id)}><i className="fa fa-remove "/> Xóa</div>
                    </div>
                    </td>
                </tr>
        );
    }
}

export default TableDataRow;