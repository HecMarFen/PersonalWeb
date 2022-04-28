import '../../Styles/languages.css'

export default function Languages (){
    return(
        <>
            <h2>Languages knowledge</h2>
            <hr/>
            <div className="progress_spanish">
                <div className="progress_spanish-value"></div>
            </div>
            <div>
                <div>Spanish</div>
                <div>Native</div>
            </div>
            <div className="progress_english">
                <div className="progress_english-value"></div>
            </div>
            <div>
                <div>English</div>
                <div>C1</div>
            </div>
            <div className="progress_german">
                <div className="progress_german-value"></div>
            </div>
            <div>
                <div>German</div>
                <div>A2</div>
            </div>
            <div className="progress_catalan">
                <div className="progress_catalan-value"></div>
            </div>
            <div>
                <div>Catalan</div>
                <div>B1</div>
            </div>

        </>
    )
}