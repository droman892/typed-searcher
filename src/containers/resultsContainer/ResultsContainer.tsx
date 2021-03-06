import './ResultsContainer.scss'
import '../../styles/_index.scss'
import { useSelector } from 'react-redux'
import { ResultsPreloader } from '../../components/preloader/ResultsPreloader'
import { ResultsHelperListItems } from '../../components/keywords/ResultsHelperListItems'

export const ResultsContainer = (props) => {
    // console.log(props)
    let searchQuery: string = useSelector((state) => state.searchQuery)
    searchQuery = searchQuery.replace(/\s+/g, '+')

    return (
        <>
            {props.resultsLength > 1 ? (
                <div className="stats-bar">
                    <div>
                        <div className="stats-relative-0">
                            <div className="stats-relative-1">
                                <div className="stats-relative-2">
                                    <div className="stats-relative-3">
                                        About <span id="results-total" />
                                        {props.resultsCount} results&nbsp;
                                        <span>
                                            (<span id="results-ts"></span>
                                            {props.resultsTiming} seconds)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <ResultsPreloader />
            )}

            {props.res0 ? (
                <ResultsHelperListItems
                    urlPath={props.link0}
                    head={props.title0}
                    desc={props.desc0}
                />
            ) : (
                ''
            )}

            {props.res1 ? (
                <ResultsHelperListItems
                    urlPath={props.link1}
                    head={props.title1}
                    desc={props.desc1}
                />
            ) : (
                ''
            )}

            {props.res2 ? (
                <ResultsHelperListItems
                    urlPath={props.link2}
                    head={props.title2}
                    desc={props.desc2}
                />
            ) : (
                ''
            )}

            {props.res3 ? (
                <ResultsHelperListItems
                    urlPath={props.link3}
                    head={props.title3}
                    desc={props.desc3}
                />
            ) : (
                ''
            )}

            {props.res4 ? (
                <ResultsHelperListItems
                    urlPath={props.link4}
                    head={props.title4}
                    desc={props.desc4}
                />
            ) : (
                ''
            )}

            {props.res5 ? (
                <ResultsHelperListItems
                    urlPath={props.link5}
                    head={props.title5}
                    desc={props.desc5}
                />
            ) : (
                ''
            )}

            {props.res6 ? (
                <ResultsHelperListItems
                    urlPath={props.link6}
                    head={props.title6}
                    desc={props.desc6}
                />
            ) : (
                ''
            )}

            {props.res7 ? (
                <ResultsHelperListItems
                    urlPath={props.link7}
                    head={props.title7}
                    desc={props.desc7}
                />
            ) : (
                ''
            )}

            {props.res8 ? (
                <ResultsHelperListItems
                    urlPath={props.link8}
                    head={props.title8}
                    desc={props.desc8}
                />
            ) : (
                ''
            )}

            {props.res9 ? (
                <ResultsHelperListItems
                    urlPath={props.link9}
                    head={props.title9}
                    desc={props.desc9}
                />
            ) : (
                ''
            )}

            {props.resultsLength > 3 ? (
                <div className="google-table">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="bottom-letter">
                                    <span className="bottom-letter-span google-blue">
                                        G
                                    </span>
                                    <span className="empty">.</span>
                                </td>
                                <>
                                    <td className="bottom-o">
                                        <span className="bottom-o-span google-red">
                                            o
                                        </span>{' '}
                                        <span className="unbold">1</span>
                                    </td>

                                    <td className="bottom-o cursor">
                                        <span className="bottom-o-span google-yellow">
                                            o
                                        </span>{' '}
                                        <span className="unbold-blue">2</span>
                                    </td>
                                    <td className="bottom-o cursor">
                                        <span className="bottom-o-span google-yellow">
                                            o
                                        </span>{' '}
                                        <span className="unbold-blue">3</span>
                                    </td>
                                    <td className="bottom-o cursor">
                                        <span className="bottom-o-span google-yellow">
                                            o
                                        </span>{' '}
                                        <span className="unbold-blue">4</span>
                                    </td>
                                    <td className="bottom-o cursor">
                                        <span className="bottom-o-span google-yellow">
                                            o
                                        </span>{' '}
                                        <span className="unbold-blue">5</span>
                                    </td>
                                    <td className="bottom-o cursor">
                                        <span className="bottom-o-span google-yellow">
                                            o
                                        </span>{' '}
                                        <span className="unbold-blue">6</span>
                                    </td>
                                    <td className="bottom-o cursor">
                                        <span className="bottom-o-span google-yellow">
                                            o
                                        </span>{' '}
                                        <span className="unbold-blue">7</span>
                                    </td>
                                    <td className="bottom-o cursor">
                                        <span className="bottom-o-span google-yellow">
                                            o
                                        </span>{' '}
                                        <span className="unbold-blue">8</span>
                                    </td>
                                    <td className="bottom-o cursor">
                                        <span className="bottom-o-span google-yellow">
                                            o
                                        </span>{' '}
                                        <span className="unbold-blue">9</span>
                                    </td>
                                    <td className="bottom-o cursor">
                                        <span className="bottom-o-span google-yellow">
                                            o
                                        </span>{' '}
                                        <span className="unbold-blue">10</span>
                                    </td>
                                </>
                                <td className="bottom-letter">
                                    <span className="bottom-letter-span google-blue">
                                        g
                                    </span>
                                    <span className="empty">.</span>
                                </td>
                                <td className="bottom-letter">
                                    <span className="bottom-letter-span google-green adjusted">
                                        l
                                    </span>
                                    <span className="empty">.</span>
                                </td>
                                <td className="bottom-letter">
                                    <span className="bottom-letter-span google-red">
                                        e
                                    </span>
                                    <span className="empty">.</span>
                                </td>
                                <td className="bottom-letter">
                                    <span className="bottom-letter-span google-blue">
                                        {'>'}
                                    </span>
                                    <span className="unbold-blue">Next</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                ''
            )}
        </>
    )
}
