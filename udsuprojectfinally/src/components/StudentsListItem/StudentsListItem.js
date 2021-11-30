
import "./StudentsListItem.css"


const StudentsListItem = (props) => {

 


   
    const {name,surname,city,scholarship,onDelete,onToggleProp,confirm,star} = props
 
    let classNames = "list-group-item d-flex justify-content-between "
    if(confirm){
        classNames+=" confirm"
    }
    if(city!="Ижевск"){
        classNames+=" star"
    }
    return(
        
        <li className={classNames} >
            
            <span  className="list-group-item-label" onClick={onToggleProp} data-toggle="star">{name} {surname} <div className="city"> г.{city}</div></span>
                <input  className="list-group-item-input" defaultValue={"Стипендия " + scholarship + "руб"}/>
                <div className="d-flex justify-content-center align-item-center">
                    <button className="btn-cookie btn-sm" onClick={onToggleProp} data-toggle="confirm">
                        <i className="fas fa-cookie"/>
                        
                    </button>
                    <button onClick={onDelete} className="btn-trash btn-sm"> 
                        <i className="fas fa-trash"/>
                        
                    </button>
                <i className="fas fa-star"/>
                </div>
       
        
               
           
        </li>
       
    )
   }



export default StudentsListItem