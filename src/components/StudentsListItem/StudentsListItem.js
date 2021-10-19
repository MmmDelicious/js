
import "./StudentsListItem.css"


const StudentsListItem = (props) => {

 


   
    const {name,surname,scholarship,onDelete,onToggleProp,confirm,star} = props
 
    let classNames = "list-group-item d-flex justify-content-between "
    if(confirm){
        classNames+=" confirm"
    }
    if(star){
        classNames+=" star"
    }
    return(
        <li className={classNames} >
            <span  className="list-group-item-label" onClick={onToggleProp} data-toggle="star">{name} {surname}</span>
                <input  className="list-group-item-input" defaultValue={scholarship + "руб"}/>
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