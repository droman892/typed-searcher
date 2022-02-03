export const MobileResultsData = (props) => {
    console.log(props)
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

        <div id="mobile-axios-data-1" className="mobile-axios-data-1">
            <div id="mobile-axios-data-2" className="mobile-axios-data-2">
                <div id="mobile-axios-data-3" className="mobile-axios-data-3">
                    <div className="mobile-axios-data-4">
                        <div className="mobile-axios-data-5">
                            <a
                                href="${response.data.results[i].link}"
                                target="_blank"
                                className="mobile-axios-data-6"
                            >
                                <div className="mobile-axios-data-7">
                                    <div className="mobile-axios-data-8">
                                        <span
                                            id="mobile-data-link"
                                            className="mobile-data-link"
                                        >
                                            {props.urlPath}
                                        </span>
                                    </div>
                                </div>

                                <div className="mobile-axios-data-9">
                                    <div className="mobile-axios-data-10">
                                        {props.head}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="mobile-axios-data-11">
                        <div className="mobile-axios-data-12">{props.desc}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
