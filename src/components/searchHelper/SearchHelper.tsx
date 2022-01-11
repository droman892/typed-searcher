import { useSelector } from 'react-redux'
import { BasicButton } from '../buttons/basicButton/BasicButton'
import { FetchButton } from '../buttons/fetchButton/FetchButton'
import './SearchHelper.scss'

export const SearchHelper = () => {
    const queryValue: string = useSelector((state: State) => state.searchQuery)

    const queryValueLength: number = queryValue.length

    console.log('Query Length: ' + queryValueLength)
    return (
        <div className="search-helper" id="search-helper">
            <div className="search-helper-2">
                <div className="helper-space"></div>
                <div className="search-helper-3">
                    <ul className="helper-list-container">
                        <li className="helper-list-item">
                            <div className="item-container">
                                <div className="item-icon"></div>
                                <div className="item-name">
                                    <div className="item-name-2">
                                        <span className="item-span">
                                            PLACEHOLDER TEXT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="helper-list-item">
                            <div className="item-container">
                                <div className="item-icon"></div>
                                <div className="item-name">
                                    <div className="item-name-2">
                                        <span className="item-span">
                                            PLACEHOLDER TEXT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="helper-list-item">
                            <div className="item-container">
                                <div className="item-icon"></div>
                                <div className="item-name">
                                    <div className="item-name-2">
                                        <span className="item-span">
                                            PLACEHOLDER TEXT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="helper-list-item">
                            <div className="item-container">
                                <div className="item-icon"></div>
                                <div className="item-name">
                                    <div className="item-name-2">
                                        <span className="item-span">
                                            PLACEHOLDER TEXT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="helper-list-item">
                            <div className="item-container">
                                <div className="item-icon"></div>
                                <div className="item-name">
                                    <div className="item-name-2">
                                        <span className="item-span">
                                            PLACEHOLDER TEXT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="helper-list-item">
                            <div className="item-container">
                                <div className="item-icon"></div>
                                <div className="item-name">
                                    <div className="item-name-2">
                                        <span className="item-span">
                                            PLACEHOLDER TEXT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="helper-list-item">
                            <div className="item-container">
                                <div className="item-icon"></div>
                                <div className="item-name">
                                    <div className="item-name-2">
                                        <span className="item-span">
                                            PLACEHOLDER TEXT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="helper-list-item">
                            <div className="item-container">
                                <div className="item-icon"></div>
                                <div className="item-name">
                                    <div className="item-name-2">
                                        <span className="item-span">
                                            PLACEHOLDER TEXT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="helper-list-item">
                            <div className="item-container">
                                <div className="item-icon"></div>
                                <div className="item-name">
                                    <div className="item-name-2">
                                        <span className="item-span">
                                            PLACEHOLDER TEXT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="helper-space-bottom"></div>
                <div className="search-helper-button-container">
                    <div className="search-helper-button-container-2">
                        <FetchButton />
                        <BasicButton />
                    </div>
                </div>
            </div>
            <div className="search-helper-text">
                <a className="helper-link" href="#!">
                    Report inappropriate predictions
                </a>
            </div>
        </div>
    )
}
