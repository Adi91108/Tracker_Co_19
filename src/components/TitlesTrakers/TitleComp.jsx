import './titleComp.css'

const TitleComp = ({title}) => {
    return(
        <div className="titleCompCard">
            <h1 className="titleComp">{title}</h1>
            <hr/>
        </div>
    )
}
export default TitleComp;