import { ReactChild, ReactFragment, ReactPortal } from 'react'

export const ResultsHelperListItems = (props: {
    urlPath: {} | null | undefined
    head: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
    desc: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
}) => {
    return (
        <div id="axios-data-1">
            <div id="axios-data-2">
                <div id="axios-data-3">
                    <div className="axios-data-4">
                        <a
                            href={props.urlPath}
                            target="_blank"
                            rel="noreferrer"
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
