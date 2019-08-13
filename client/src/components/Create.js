import React, { Component } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default class Create extends Component {



    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeIngredients = this.onChangeIngredients.bind(this);
        this.onChangePreparation = this.onChangePreparation.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.state = {
            name: '',
            ingredients: '',
            preparation: '',
            author: ''

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
        const serverport = {
            name: this.state.name,
            ingredients: this.state.ingredients,
            preparation:this.state.preparation,
            author:this.state.author
        }
        if(serverport.name === '' || serverport.author === '' || serverport.preparation === '' || serverport.ingredients === ''  ){
            alert('The information is blank')
            
        }else{
            axios.post('/add', serverport)
            .then(res => console.log(res.data));

            this.setState({
                name: '',
                ingredients: '',
                preparation: '',
                author: ''
            });
            alert('Sucsses')
        }
    }
    render() {
        return (
            <div className="form-group">
                <form >
                    <label>Hot Dog name</label>
                    <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName}/>
                    <label>Ingredients</label>
                    <textarea className="form-control" rows="6" value={this.state.ingredients} onChange={this.onChangeIngredients}></textarea>
                    <label>Preparation</label>
                    <textarea className="form-control" rows="6" value={this.state.preparation} onChange={this.onChangePreparation}></textarea>
                    <label>Author</label><input
                    type="text" className="form-control" value={this.state.author} onChange={this.onChangeAuthor}/>
        
                    <button onClick={this.onSubmit} className="btn  btn-secondary m-2" type="submit" >Add</button>
                    

                </form>
            </div>
        )
    }
}