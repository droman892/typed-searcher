export const ResultsHelperListItems = (props) => {
    // console.log(props)
    return (
        // <div id="axios-data-1">
        //     <div id="axios-data-2">
        //         <div id="axios-data-3">
        //             <div className="axios-data-4">
        //                 <a
        //                     href="${response.data.results[i].link}"
        //                     target="_blank"
        //                 >
        //                     <p id="data-link">
        //                         ${response.data.results[i].link}
        //                     </p>
        //                     <h3 id="data-title">
        //                         ${response.data.results[i].title}
        //                     </h3>
        //                 </a>
        //             </div>
        //             <div id="axios-data-5">
        //                 <p id="description">
        //                     ${response.data.results[i].description}
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div id="axios-data-1">
            <div id="axios-data-2">
                <div id="axios-data-3">
                    <div className="axios-data-4">
                        <a
                            href="${response.data.results[i].link}"
                            target="_blank"
                        >
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
