
import StudentsListItem from "../StudentsListItem/StudentsListItem"

import "./StudentsList.css"



const StudentsList = ({data,onDelete,onToggleProp}) => {

   let students =  data.map(person => {
    const {id, ...personProps} = person
        return(
            <StudentsListItem key={id} 
            {...personProps}  
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id,e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    })





    

    return(
        data.length != 0 
        ?
        <ul className="app-list list-group">
        {students}
            
        </ul> 
        :
        <h1>
            ВСЕ СТУДЕНТЫ ОТЧИСЛЕННЫ ИЛИ БАЗА ДАННЫХ УПАЛА
        </h1>
    )
    
}

export default StudentsList