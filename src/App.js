import React, {Component} from 'react';
import Input from './components/Input';
import List from './components/List';
import uuid from 'uuid';

class App extends Component {

  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  };

  handleChange =(e) =>{
    this.setState({
      item:e.target.value,
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();

    const newItem={
      id:this.state.id,
      title:this.state.item
    }

    const updataItem = [ ...this.state.items , newItem]

    this.setState({
      items:updataItem,
      item:'',
      id:uuid(),
      editItem:false
    })
  }

  clearList = () => {
    this.setState({
      items: [] 
    })
  }

  handleDelete= (id) =>{
    const fillItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: fillItems 
    })
  }

  handleEdit = (id) => {
    const fillItems = this.state.items.filter(item => item.id !== id);
    const selected = this.state.items.find( (item) => item.id === id);
    this.setState({
      items : fillItems,
      item : selected.title,
      editItem : true,
      id : id
    })
  }
  render(){
  return (

    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">
            todo input 
          </h3>
        <Input item={this.state.item} 
        handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit}
        editItem={this.state.editItem}
        />

        <List
         items={this.state.items}
          clearList={this.clearList}
           handleDelete={this.handleDelete} 
           handleEdit={this.handleEdit} 
           />

        </div>
      </div>
    </div>
  );
  }
}

export default App;
