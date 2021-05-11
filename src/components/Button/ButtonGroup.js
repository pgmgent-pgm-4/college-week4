import Button from './Button';
import React from 'react'

const ButtonGroup = ({buttons}) => {
    return (
        <div>
            {buttons.map(button => <Button type={button.type}></Button>)}
        </div>
    )
}

export default ButtonGroup
