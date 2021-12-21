import { Component } from 'react'

import './App.css'
import AppInfo from '../AppInfo/AppInfo'
import SearchPanel from '../SearchPanel/SearchPanel'
import AppFilter from '../AppFlter/AppFilter'

import StudentsList from '../StudentsList/StudentsList'
import StudentsAddForm from '../StudentsAddForm/StudentsAddForm'
import StudentsEditForm from '../StudentsEditForm/StudentsEditForm'


class App extends Component {
  
    constructor(props){
        super(props)
        this.state = {
            data: [
                
                {name:"Ян",description:"Зачислен 20.08.19,Место учебы Гимназия 56",surname:"Дектерёв",city:"Ижевск",scholarship:3000,confirm:false,id:1,star:false},
                {name:"Рома",description:"Зачислен 20.07.19,Место учебы МБОУ 14",surname:"Фоминых",city:"Глазов",scholarship:14000,confirm:true,id:2,star:false},
                {name:"Самат",description:"Зачислен 6.08.19,Место учебы Гимназия 32",surname:"Байкузин",city:"Сарапул",scholarship:3000,confirm:true,id:3,star:true},
                {name:"Илья",description:"Зачислен 5.06.19,Место учебы МАОУ 1",surname:"Белослудцев",city:"Можга",scholarship:13000,confirm:false,id:4,star:true},
                {name:"Даша",description:"Зачислен 4.06.19,Место учебы Гимназия 21",surname:"Зайцева",city:"Ижевск",scholarship:3000,confirm:true,id:5,star:true},
                {name:"Гриша",description:"Зачислен 22.08.19,Место учебы Лицей 41",surname:"Шамшурин",city:"Ижевск",scholarship:3000,confirm:true,id:6,star:false},
                {name:"Юля",description:"Неизвестно",surname:"Силантьева",city:"Можга",scholarship:3000,confirm:true,id:7,star:true},
                {name:"Илья",description:"Неизвестно",surname:"Петухов",city:"Воткинск",scholarship:3000,confirm:true,id:8,star:false},
                



                
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


    addItem = (name,surname,city,scholarship,description) => {
        const newItem = {
            name:name,
            surname:surname,
            city:city,
            scholarship:scholarship,
            description:description,
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
            if(item.name.indexOf(term) > -1){
          return  item.name.indexOf(term) > -1
            }
            else if(item.surname.indexOf(term) > -1){
                return  item.surname.indexOf(term) > -1
                  }
                  else if(item.city.indexOf(term) > -1){
                    return  item.city.indexOf(term) > -1
                      }
        })
    }


      
    onUpdateSearch = (term) =>{
        this.setState({term})
    }

     
    sortfunction(a, b){
        return (a - b)
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
            case'city':
            {
                return items.filter(item =>
                    item.city !== "Ижевск"
                )
            }
            case'star':
            {
                return items.filter(item =>
                    item.star
                )
            }
            case'nameSort':
            {
                const nameSortedArr = [...items]
                return nameSortedArr.sort(function(a, b){
                    if(a.name < b.name) { return -1; }
                    if(a.name > b.name) { return 1; }
                    
                })
            }
            case'moneySort':
            {
                const moneySortedArr = [...items]
                return moneySortedArr.sort(function(a, b){
                    if(b.scholarship < a.scholarship) { return -1; }
                    if(b.scholarship > a.scholarship) { return 1; }
                    
                })
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
            <StudentsEditForm onAdd={this.addItem}/>
        </div>
    )
   }


  


}

export default App