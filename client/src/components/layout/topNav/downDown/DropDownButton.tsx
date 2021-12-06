import React from 'react';
import './DropDownButton.css';
import { Dropdown, Icon, Button, Divider } from 'react-materialize';

const DropDownButton = () => {
    
    return (
        
        <Dropdown
            id="Dropdown_8"
            options={{
                alignment: 'left',
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: true,
                container: null,
                coverTrigger: true,
                hover: false,
                inDuration: 150,
                outDuration: 250
            }}
            trigger={<Button node="button">Drop Me!</Button>}
            >
            <a href="#">
                one
            </a>
            <a href="#">
                two
            </a>

            <Divider />
            <a href="#">
                three
            </a>
            <a href="#">
                <Icon>
                view_module
                </Icon>
                four
            </a>
            <a href="#">
                <Icon>
                cloud
                </Icon>
                {' '}five
            </a>
        </Dropdown>
        
    )
}

export default DropDownButton;