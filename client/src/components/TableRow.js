import React, { Component } from 'react';
import axios from 'axios'
import $ from 'jquery'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Index from './Index';
import Create from './Create';
import Update from './Update';
class TableRow extends Component {
constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

        this.onSave = this.onSave.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeIngredients = this.onChangeIngredients.bind(this);
        this.onChangePreparation = this.onChangePreparation.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.state = {
            name: this.props.obj.name,
            ingredients: this.props.obj.ingredients,
            preparation: this.props.obj.preparation,
            author: this.props.obj.author,
            id:this.props.obj._id
          }
        }


onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeIngredients(e) {
        this.setState({
            ingredients: e.target.value
        });
    }
    onChangePreparation(e) {
        this.setState({
            preparation: e.target.value
        });
    }
    onChangeAuthor(e) {
        this.setState({
            author: e.target.value
        });
    }
        onSubmit(e) {
        e.preventDefault();
        
        axios.delete("/delete/"+this.props.obj._id)
        .then(res => console.log("sucsses"));
        
    }

onSave(e) {
        e.preventDefault();
        const data2 = {
            name: this.state.name,
            ingredients: this.state.ingredients,
            preparation: this.state.preparation,
            author: this.state.author
        }
        
        console.log(this.state.id)
        axios.put('/save/'+this.state.id, data2)
        .then(res => console.log(res.data));
/*
        $.ajax({
                url: "save",
                contentType: "application/json",
                method: "PUT",
                data: JSON.stringify({
                    id: this.props.obj._id,
                    name: this.state.name,
            ingredients: this.state.ingredients,
            preparation:this.state.preparation,
            author:this.state.author
                }),
                success: function (user) {
                    
                    console.log(user);
                    
                }
            })
    }
*/
}
  render() {
    return (
        


        <Route>
          <div className="card col-sm-5">
          <div className="card-body  ">
            <h4 className="card-title">{this.props.obj.name}</h4>
            <label>Ingredients</label>
            <h6 className="text-muted card-subtitle mb-2">{this.props.obj.ingredients}</h6>
            <label>Preparation</label>
            <p>{this.props.obj.preparation}</p>
            <p className="card-text">{this.props.obj.author}</p>


            <form onClick={this.onSubmit}>
              <button className="btn  btn-secondary m-2" type="submit" ><Link to={'/Sucsses'}>Delete</Link></button>
            </form>

            </div>
        </div>
            <div className="form-group  col-sm-6 ">
                <form >
                    <label>Hot Dog name</label>
                    <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName}/>
                    <label>Ingredients</label>
                    <textarea className="form-control" rows="6" value={this.state.ingredients} onChange={this.onChangeIngredients}></textarea>
                    <label>Preparation</label>
                    <textarea className="form-control" rows="6" value={this.state.preparation} onChange={this.onChangePreparation}></textarea>
                    <label>Author</label><input
                    type="text" className="form-control" value={this.state.author} onChange={this.onChangeAuthor}/>
                
                
                    <button onClick={this.onSave} className="btn  btn-secondary m-2" type="submit" ><Link to={'/SucssesUp'}>Update & Save</Link></button>
                
              
           
                </form>
            </div>
        </Route>

    );
  }
}

export default TableRow;
