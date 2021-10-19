import { Component } from 'react';

import './StudentsAddForm.css';

class StudentsAddForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"",
            surname:"",
            scholarship:""
        }
    }


    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    onSubmit = (e) => {
        e.preventDefault();
    
      if(this.state.name.length>2&& this.state.surname.length>3&&this.state.scholarship!=""){
        this.props.onAdd(this.state.name, this.state.surname, this.state.scholarship);
        this.setState({
            name: '',
            surname:'',
            scholarship: ''
        })
      }
    }

   render(){

    const {name,surname,scholarship} = this.props 


     


    return (
        <div className="app-add-form">
            <h3>Добавьте нового студента</h3>
            <form
                className="add-form d-flex"
                onSubmit = {this.onSubmit}>
                    
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Имя?" 
                    onChange={this.onValueChange} 
                    name="name"
                    value={name}/>

                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Фамилия?" 
                    onChange={this.onValueChange} 
                    name="surname"
                    value={surname}/>
                    
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Стипендия" 
                    onChange={this.onValueChange} 
                    name="scholarship" 
                    value={scholarship}/>

                <button 
                className="btn btn-outline-light">Добавить
                </button>
                
            </form>
        </div>
    )
   }
}

export default StudentsAddForm;