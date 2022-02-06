import { BasicButton } from '../buttons/basicButton/BasicButton'
import { FetchButton } from '../buttons/fetchButton/FetchButton'
import './ResultsSearchHelper.scss'
import { HelperListItems } from '../keywords/HelperListItems'
import { useEffect, useState } from 'react'

export const ResultsSearchHelper = () => {
    // console.log('FIRST ITEM: ' + firstItem)

    const [itemsCount, setItemsCount] = useState(0)

    useEffect(() => {
        const itemsList = document.getElementById('items-list')
        const itemsListCount = itemsList?.childElementCount || 0
        console.log('ITEMS LIST COUNT: ' + itemsListCount)
    })

    return (
        <div className="results-search-helper" id="results-search-helper">
            <div className="results-search-helper-2">
                <div className="results-helper-space"></div>
                <div className="results-search-helper-3">
                    <ul className="results-helper-list-container">
                        <div className="results-helper-list-container-2">
                            <ul
                                className="results-helper-list-container-3"
                                id="items-list"
                            >
                                <HelperListItems />
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>

            <div className="results-search-helper-text">
                <a className="results-helper-link" href="#!">
                    Report inappropriate predictions
                </a>
            </div>
        </div>
    )
}
