import './ResultsNavigation2.scss'
import '../../../styles/_index.scss'
import rainbowGlass from '../../../assets/images/rainbowGlass.png'
import imagesLogo from '../../../assets/images/imagesLogo.png'
import priceTag from '../../../assets/images/priceTag.png'
import play from '../../../assets/images/play.png'
import news from '../../../assets/images/news.png'
import dots from '../../../assets/images/dots.png'

export const ResultsNavigation2 = () => {
    return (
        <div className="results-nav2-container-1">
            <div className="results-nav2-container-2">
                <div className="results-nav2-container-3">
                    <div id="results-box-separator">
                        <div className="results-nav2-container-4">
                            <div className="results-nav2-section">
                                <a
                                    href="#!"
                                    className="section-results-0 blue-link"
                                >
                                    <span className="section-results-1">
                                        <img
                                            src={rainbowGlass}
                                            alt="Rainbow Magnifying Glass Logo"
                                            className="results-nav2-images"
                                        />
                                    </span>
                                    All
                                    <div className="blue-line"></div>
                                </a>
                            </div>

                            <div className="results-nav2-section">
                                <a
                                    href="#!"
                                    className="section-results-0 grey-link"
                                >
                                    <span className="section-results-1">
                                        <img
                                            src={news}
                                            alt="News Logo"
                                            className="results-nav2-images"
                                        />
                                    </span>
                                    News
                                </a>
                            </div>

                            <div className="results-nav2-section">
                                <a
                                    href="#!"
                                    className="section-results-0 grey-link"
                                >
                                    <span className="section-results-1">
                                        <img
                                            src={play}
                                            alt="Video Logo"
                                            className="results-nav2-images"
                                        />
                                    </span>
                                    Videos
                                </a>
                            </div>

                            <div className="results-nav2-section">
                                <a
                                    href="#!"
                                    className="section-results-0 grey-link"
                                >
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
                                <a
                                    href="#!"
                                    className="section-results-0 grey-link"
                                >
                                    <span className="section-results-1">
                                        <img
                                            src={priceTag}
                                            alt="Price Tag Logo"
                                            className="results-nav2-images"
                                        />
                                    </span>
                                    Shopping
                                </a>
                            </div>

                            <div className="results-nav2-section">
                                <a
                                    href="#!"
                                    className="section-results-0 grey-link"
                                >
                                    <span className="section-results-1">
                                        <img
                                            src={dots}
                                            alt="Dots Logo"
                                            className="results-nav2-images"
                                        />
                                    </span>
                                    More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="results-nav2-container-5">Tools</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
