import React, { Component } from 'react';
import axios from 'axios';
export default class Update extends Component {


    render() {
        console.log(this.props)
        return (
           
            <div className="form-group">
                <form >
                    <label>Hot Dog name</label>
                    <input type="text" className="form-control"  />
                    <label>Ingredients</label>
                    <textarea className="form-control" rows="6"  ></textarea>
                    <label>Preparation</label>
                    <textarea className="form-control" rows="6"  ></textarea>
                    <label>Author</label><input
                    type="text" className="form-control"  />
        
                    <input type="submit" value="Save" className="btn btn-secondary m-2"/>
                </form>
            </div>






        )
    }
}