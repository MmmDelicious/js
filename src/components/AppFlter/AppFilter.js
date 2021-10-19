import './AppFilter.css'




const AppFilter = function(props){


    const buttonsData = [{name:"all",label:"Все студенты"},
    {name:"increase",label:"Студенты со стипендией"},
    {name:">1000",label:"Стипендия больше 3000"},
    {name:"star",label:"Иногородние студенты"}]



    const buttons = buttonsData.map(btn => {
        const active = props.filter == btn.name
        const clazz = active ? "btn btn-light":"btn-outline-light"
        return(
            <button className={`btn ${clazz} `} onClick={() =>{props.onFilterSelect(btn.name)}} key={btn.name} type="button">{btn.label}</button>
        )
    })

    return(
        <div className="btn-group"
        >
            {buttons}
            
        </div>
    )
}

export default AppFilter