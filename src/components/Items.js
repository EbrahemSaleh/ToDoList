import React, { Component } from 'react';

class Items extends Component {
    render() {
        const {title , handleDelete , handleEdit} =this.props
        return (
        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
             <h6>{title}</h6>
            <div class="list">
                <span className="mx-2 text-success">
                    <i className="fas fa-pen" onClick={handleEdit} />
                </span>
                <span className="mx-2 text-danger">
                    <i className="fas fa-trash" onClick={handleDelete} />
                </span>
            </div>
        </li>
        )
    }
}

export default Items;