import React, { Component } from 'react'

 class Input extends Component {
     
    render() {
        const {item ,handleChange,handleSubmit ,editItem} = this.props;
        return (
            <div className="card card-body my-3">
                <form  onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className = "input-group-text bg-info text-white">
                                <i className="fas fa-book"/>
                            </div>
                        </div>
                        <input type="text" 
                        className="form-control text-capitalize"
                         placeholder="add a todo items"
                         value={item}
                         onChange={handleChange} 
                         />
                    </div>
                    <button type="submit" 
                    className={
                        editItem ? "btn btn-success mt-3 btn-block text-capitalize" :
                        "btn btn-info mt-3 btn-block text-capitalize"
                    }>
                        { editItem ? "edit items" : "add items" } 
                        </button>
                </form>
                
            </div>
        )
    }
}

export default Input
