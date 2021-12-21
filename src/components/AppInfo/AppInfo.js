import "./AppInfo.css"




const AppInfo = ({students,confirmed}) => {


    return (
        <div className="AppInfo">
            <h1>Учет студентов</h1>
            <h2>Общее число студентов:{students}</h2>
            <h2>Студенты со стипендией:{confirmed}</h2>
        </div>
    )
}


export default AppInfo;