import './ButtonContainer.scss'
import { FetchButton } from '../../components/buttons/fetchButton/FetchButton'
import { BasicButton } from '../../components/buttons/basicButton/BasicButton'

export const ButtonContainer = () => {
    return (
        <div className="button-box">
            <div className="center-box">
                <FetchButton />
                <BasicButton />
            </div>
        </div>
    )
}
