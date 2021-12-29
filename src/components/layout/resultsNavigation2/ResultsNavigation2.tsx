import './ResultsNavigation2.scss'
import '../../../styles/_index.scss'
import imagesLogo from '../../../assets/images/imagesLogo.png'
import play from '../../../assets/images/play.png'

export const ResultsNavigation2 = () => {
    return (
        <div className="results-nav2-container-1">
            <div className="results-nav2-container-2">
                <div className="results-nav2-container-3">
                    <div>
                        <div className="results-nav2-container-4">
                            <div className="results-nav2-section">
                                <a href="#!" className="section-results-0">
                                    <span className="section-results-1">
                                        <img
                                            src={imagesLogo}
                                            alt="Images Logo"
                                            className="results-nav2-images"
                                        />
                                    </span>
                                    All
                                </a>
                            </div>

                            <div className="results-nav2-section">
                                <a href="#!" className="section-results-0">
                                    <span className="section-results-1">
                                        <img
                                            src={imagesLogo}
                                            alt="Images Logo"
                                            className="results-nav2-images"
                                        />
                                    </span>
                                    Images
                                </a>
                            </div>

                            <div className="results-nav2-section">
                                <a href="#!" className="section-results-0">
                                    <span className="section-results-1">
                                        <img
                                            src={imagesLogo}
                                            alt="Images Logo"
                                            className="results-nav2-images"
                                        />
                                    </span>
                                    Shopping
                                </a>
                            </div>

                            <div className="results-nav2-section">
                                <a href="#!" className="section-results-0">
                                    <span className="section-results-1">
                                        <img
                                            src={play}
                                            alt="Images Logo"
                                            className="results-nav2-images"
                                        />
                                    </span>
                                    Videos
                                </a>
                            </div>

                            <div className="results-nav2-section">
                                <a href="#!" className="section-results-0">
                                    <span className="section-results-1">
                                        <img
                                            src={imagesLogo}
                                            alt="Images Logo"
                                            className="results-nav2-images"
                                        />
                                    </span>
                                    News
                                </a>
                            </div>

                            <div className="results-nav2-section">
                                <a href="#!" className="section-results-0">
                                    <span className="section-results-1">
                                        <img
                                            src={imagesLogo}
                                            alt="Images Logo"
                                            className="results-nav2-images"
                                        />
                                    </span>
                                    More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
