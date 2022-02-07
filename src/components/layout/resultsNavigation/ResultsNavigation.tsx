import './ResultsNavigation.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Navbar, Icon, NavItem, Button } from 'react-materialize'
import { LayoutSideNavigation } from '../layoutSideNavigation/LayoutSideNavigation'
import { ResultsSearcher } from '../../resultsSearcher/ResultsSearcher'
import { ResultsNavigation2 } from '..//resultsNavigation2/ResultsNavigation2'
import GoogleLogo from '../../../assets/images/GoogleLogo.svg'
import userProfile from '../../../assets/images/userProfile.png'
import { ResultsMobileNavigation } from '../resultsMobileNavigation/ResultsMobileNavigation'
import { Link } from 'react-router-dom'
import { ResultsHelperListItems } from '../../keywords/ResultsHelperListItems'
import { MobileResultsData } from '../../keywords/MobileResultsData'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const ResultsNavigation = () => {
    const [stats, setStats] = useState('')

    const [resultsResponseData, setResultsResponseData] = useState('')

    const queryString = window.location.search
    // console.log('QUERY STRING: ' + queryString)
    const urlParams = new URLSearchParams(queryString)
    const queryMade = urlParams.get('q') || ''


    // useEffect(() => {
    //     console.log('MOBILE USEEFFECT')
    // })

    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${queryMade}&num=10`,
    //         headers: {
    //             'x-user-agent': 'desktop',
    //             'x-proxy-location': 'EU',
    //             'x-rapidapi-host': 'google-search3.p.rapidapi.com',
    //             'x-rapidapi-key':
    //                 '9cdabbc96amsh83dd832ad95c9e2p1f9988jsn41ca0b264b55',
    //         },
    //     }

    //     axios
    //         .request(options)
    //         .then(function (response) {
    //             // console.log(response.data)
    //             // console.log(response.data.results)

    //             if (response.data !== undefined) {
    //                 const resultsStatsArray = response.data
    //                 // console.log(resultsStatsArray)

    //                 setStats(resultsStatsArray)
    //             }

    //             if (response.data.results !== undefined) {
    //                 const resultsDataArray = response.data.results
    //                 console.log(resultsDataArray)
    //                 setResultsResponseData(resultsDataArray)
    //             }
    //         })
    //         .catch(function (error) {
    //             console.error(error)
    //         })
    // }, [])

    return (
        <header>
            <div className="section-results">
                <Navbar
                    id="mobile-nav"
                    menuIcon={<Icon>menu</Icon>}
                    options={{
                        draggable: true,
                        edge: 'left',
                        inDuration: 250,
                        outDuration: 200,
                        preventScrolling: true,
                    }}
                    sidenav={<LayoutSideNavigation />}
                >
                    <div className="nav-container-results">
                        <ResultsSearcher />
                        <div className="nav-container-right-results">
                            <div className="gear-container">
                                <div className="gear-container-2">
                                    <NavItem href="#" className="nav-gear">
                                        <Icon className="settings-icon">
                                            settings
                                        </Icon>
                                    </NavItem>
                                </div>
                            </div>

                            <div className="container-0">
                                <div className="button-apps-container">
                                    <div className="results-nav-item-container">
                                        <div className="results-nav-item-container-2">
                                            <NavItem
                                                href="#"
                                                className="results-nav-item-apps"
                                            >
                                                <Icon className="results-apps-icon">
                                                    apps
                                                </Icon>
                                            </NavItem>
                                        </div>
                                    </div>

                                    <div className="results-nav-item-container">
                                        <Button
                                            node="a"
                                            className="results-nav-button"
                                        >
                                            <span className="results-sign-in">
                                                Sign in
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mobile-results-2">
                        <Link to="/" className="mobile-results-container">
                            <img
                                src={GoogleLogo}
                                alt="Google Logo"
                                className="results-container-image"
                            ></img>
                        </Link>
                        <div className="results-mobile-profile">
                            <a href="#!" className="results-profile-icon">
                                <img
                                    src={userProfile}
                                    alt="User Profile"
                                    className="user-profile"
                                ></img>
                            </a>
                        </div>
                    </div>
                    <div className="mobile-results-searcher">
                        <div>
                            <ResultsMobileNavigation />
                        </div>
                    </div>
                    <div
                        id="mobile-results-items-container"
                        className="mobile-results-items-container"
                    >
                        <div>
                            <div className="mobile-results-items-container-2">
                                <div className="mobile-results-items-container-3">
                                    <div className="mobile-results-item-first">
                                        All
                                    </div>
                                    <div className="mobile-results-item">
                                        <a
                                            href="#!"
                                            className="mobile-results-item-a"
                                        >
                                            Maps
                                        </a>
                                    </div>
                                    <div className="mobile-results-item">
                                        <a
                                            href="#!"
                                            className="mobile-results-item-a"
                                        >
                                            Videos
                                        </a>
                                    </div>
                                    <div className="mobile-results-item">
                                        <a
                                            href="#!"
                                            className="mobile-results-item-a"
                                        >
                                            Shopping
                                        </a>
                                    </div>
                                    <div className="mobile-results-item">
                                        <a
                                            href="#!"
                                            className="mobile-results-item-a"
                                        >
                                            Images
                                        </a>
                                    </div>
                                    <div className="mobile-results-item">
                                        <a
                                            href="#!"
                                            className="mobile-results-item-a"
                                        >
                                            News
                                        </a>
                                    </div>
                                    <div className="mobile-results-item">
                                        <a
                                            href="#!"
                                            className="mobile-results-item-a"
                                        >
                                            Books
                                        </a>
                                    </div>
                                    <div className="mobile-results-item">
                                        <a
                                            href="#!"
                                            className="mobile-results-item-a"
                                        >
                                            Flights
                                        </a>
                                    </div>
                                    <div className="mobile-results-tools">
                                        Search tools
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="mobile-results-query-data"
                        className="mobile-results-query-data"
                    >
                        {/* <MobileResultsData
                            urlPath={resultsResponseData[0].link}
                            head={resultsResponseData[0].title}
                            desc={resultsResponseData[0].description}
                        />

                        <MobileResultsData
                            urlPath="https://www.searchEngineProjectDR.tech"
                            head="FIRST Official Search Engine Project (DR) Test Component"
                            desc="This is simply a description of this component used to test if the actual API information fetched through Axios will be presented how I want it do."
                        /> */}

                        {resultsResponseData[0] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[0].link}
                                head={resultsResponseData[0].title}
                                desc={resultsResponseData[0].description}
                            />
                        ) : (
                            ''
                        )}

                        {resultsResponseData[1] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[1].link}
                                head={resultsResponseData[1].title}
                                desc={resultsResponseData[1].description}
                            />
                        ) : (
                            ''
                        )}

                        {resultsResponseData[2] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[2].link}
                                head={resultsResponseData[2].title}
                                desc={resultsResponseData[2].description}
                            />
                        ) : (
                            ''
                        )}

                        {resultsResponseData[3] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[3].link}
                                head={resultsResponseData[3].title}
                                desc={resultsResponseData[3].description}
                            />
                        ) : (
                            ''
                        )}

                        {resultsResponseData[4] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[4].link}
                                head={resultsResponseData[4].title}
                                desc={resultsResponseData[4].description}
                            />
                        ) : (
                            ''
                        )}

                        {resultsResponseData[5] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[5].link}
                                head={resultsResponseData[5].title}
                                desc={resultsResponseData[5].description}
                            />
                        ) : (
                            ''
                        )}

                        {resultsResponseData[6] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[6].link}
                                head={resultsResponseData[6].title}
                                desc={resultsResponseData[6].description}
                            />
                        ) : (
                            ''
                        )}

                        {resultsResponseData[7] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[7].link}
                                head={resultsResponseData[7].title}
                                desc={resultsResponseData[7].description}
                            />
                        ) : (
                            ''
                        )}

                        {resultsResponseData[8] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[8].link}
                                head={resultsResponseData[8].title}
                                desc={resultsResponseData[8].description}
                            />
                        ) : (
                            ''
                        )}

                        {resultsResponseData[9] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[9].link}
                                head={resultsResponseData[9].title}
                                desc={resultsResponseData[9].description}
                            />
                        ) : (
                            ''
                        )}
                    </div>
                </Navbar>
            </div>
            <ResultsNavigation2 />
        </header>
    )
}
