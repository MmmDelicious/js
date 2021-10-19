import { Component } from 'react'

import './App.css'
import AppInfo from '../AppInfo/AppInfo'
import SearchPanel from '../SearchPanel/SearchPanel'
import AppFilter from '../AppFlter/AppFilter'

import StudentsList from '../StudentsList/StudentsList'
import StudentsAddForm from '../StudentsAddForm/StudentsAddForm'



class App extends Component {
  
    constructor(props){
        super(props)
        this.state = {
            data: [
                {name:"Ян",surname:"Дектерёв",scholarship:3000,confirm:false,id:1,star:false},
                {name:"Рома",surname:"Фоминых",scholarship:14000,confirm:true,id:2,star:false},
                {name:"Самат",surname:"Байкузин",scholarship:3000,confirm:true,id:3,star:true},
                {name:"Илья",surname:"Белослудцев",scholarship:13000,confirm:false,id:4,star:true},
                {name:"Даша",surname:"Зайцева",scholarship:3000,confirm:true,id:5,star:true},
                {name:"Гриша",surname:"Шамшурин",scholarship:3000,confirm:true,id:6,star:false},
                {name:"Юля",surname:"Силантьева",scholarship:3000,confirm:true,id:7,star:true},
                {name:"Илья",surname:"Петухов",scholarship:3000,confirm:true,id:8,star:false},
                



                
            ],
            term:'',
            filter:'all'
        }
        this.maxId = this.state.data.length + 1;
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
            data:data.filter(item => item.id !== id)
            }
        })
    }


    addItem = (name,surname,scholarship) => {
        const newItem = {
            name:name,
            surname:surname,
            scholarship:scholarship,
            confirm:false,
            star:false,
            id:this.maxId++
        }

     


        this.setState(({data}) =>{
            const newArr = [...data,newItem]
            return{
                data:newArr
            }
        })
    
    }
    onToggleProp = (id,prop) => {
       this.setState(({data}) => ({
           data:data.map(item =>{
               if(item.id === id){
               return  {...item,[prop]:!item[prop]}
            }
               return item
             })
           
       }))
       
    }

    searchStudents(items,term){
        if(term.length === 0){
            return items
        }
        return items.filter((item) => {
          return  item.name.indexOf(term) > -1
        })
    }


      
    onUpdateSearch = (term) =>{
        this.setState({term})
    }



    filterPost = (items,filter) =>{
        switch(filter){
            case'rise':
            {
                return items.filter(item =>
                    item.rise
                )
            }
            case'>1000':
            {
                return items.filter(item =>
                    item.scholarship > 3000
                )
            }
            case'increase':
            {
                return items.filter(item =>
                    item.confirm
                )
            }
            case'star':
            {
                return items.filter(item =>
                    item.star
                )
            }
            default:
                return items
        }
    }





    onFilterSelect = (filter) =>{
        this.setState({filter})
    }


   render(){
    const {data,term,filter} = this.state
    const students = this.state.data.length
    const confirmed = this.state.data.filter(item => item.confirm === true).length
    const filtredData = this.filterPost(this.searchStudents(data,term),filter);
    return(
        <div className="App">
            <AppInfo students={students} confirmed={confirmed}/>
                <div className="SearchPanel">
                <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                <AppFilter filter={filter}
                onFilterSelect={this.onFilterSelect}/>
            </div>
            <StudentsList 
                data={filtredData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp} 
            />
            <StudentsAddForm onAdd={this.addItem}/>
        </div>
    )
   }


  


}

export default App