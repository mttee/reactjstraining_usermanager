import React, { Component } from 'react';
import TableDataRow from './TableDataRow';
//Dữ liệu


class TableData extends Component {
    // thay vì viết vào trong thì mình cũng có thể viết ra ngoài
    mappingDataUser = () => this.props.DataUser.map((value,key)=> (
    <TableDataRow 
        deleteClick={(id)=>this.props.deleteClick(id)}
        editFunClick={(user) => this.props.editFun(value)}
        trangThaiShowForm={() => this.props.trangThaiShowForm()}
        key={key}
        stt={key}
        id={value.id} 
        name={value.name}
        tel={value.tel}
        permission={value.permission}
    />
    ))
    render() {
        //console.log(this.props.DataUser);
        
        if(this.props.DataUser.length !== 0 ){
            return (
                <div className="col">
                    <table className="table table-striped table-inverse table-hover " style={{width: '100%'}}>
                        <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện Thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                        </thead>
                        <tbody>
                            {/* Gọi hàm show ra */}
                            {this.mappingDataUser()}
                        </tbody>
                    </table>
                </div>

            );
        }
        else{
            return (
                <div className="col">
                    <h5>Không tìm thấy dữ liệu bạn cần!</h5>
                    <h6>Vui lòng kiểm tra lại từ khóa tìm kiếm giúp mình nhé!</h6>
                </div>
            );
        }
    }
}

export default TableData;