export const MobileResultsData = (props) => {
    // console.log(props)
    return (
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
