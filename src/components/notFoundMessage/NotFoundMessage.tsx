import './NotFoundMessage.scss'

export const NotFoundMessage = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-container-2">
                <h4 className="nf-text">Woah there!</h4>
                <h5 className="nf-text">
                    The page you tried visiting doesn&#39;t exist...
                </h5>
                <h5 className="nf-text">Feel free to search something!</h5>
            </div>
        </div>
    )
}
