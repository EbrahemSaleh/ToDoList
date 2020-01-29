import React, { Component } from 'react';
import Items from './Items';

 
 class List extends Component {
    render() {
        const { items , clearList , handleDelete , handleEdit} = this.props;
        return (
         <ul className="list-group my-5">
             <h3 className="text-capitalize text-center">
                 todo list
             </h3> 
             {
                 items.map(item => {
                     return(
                        <Items 
                         key={item.id} 
                        title={item.title} 
                        handleDelete={() => handleDelete(item.id)}
                        handleEdit={() => handleEdit(item.id)}
                        /> 
                     )
                 })
             }
            
             <button type="submit"
              className="btn btn-dark btn-block text-capitalize mt-5"
              onClick={clearList}
              >delete list</button>
         </ul>
        )
    }
}

export default List;
