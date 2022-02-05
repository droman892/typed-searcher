export const ResultsHelperListItems = (props) => {
    // console.log(props)
    return (

        <div id="axios-data-1">
            <div id="axios-data-2">
                <div id="axios-data-3">
                    <div className="axios-data-4">
                        <a href={props.urlPath} target="_blank">
                            <p id="data-link">{props.urlPath}</p>
                            <h3 id="data-title">{props.head}</h3>
                        </a>
                    </div>
                    <div id="axios-data-5">
                        <p id="description">{props.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
