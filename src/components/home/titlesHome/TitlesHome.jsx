import './titlesHome.css'

const TitleHome = ({subtitle, title}) => {

    return(
        <div className="boxTitlesHome">
            <h4 className="subtitleHome">{subtitle}</h4>
            <h2 className="titleHome">{title}</h2>
        </div>
    )
}

export default TitleHome