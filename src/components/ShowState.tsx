import React from 'react'

interface OwnProps {
    inputValue: string
    selectedValue: string
    clickCount: number
}

type Props = OwnProps
export const ShowState : React.FC<Props> = props => {
    return(
        <div>
            <label>[states]</label>
            <br></br>
            <div>{props.inputValue}</div>
            <br></br>
            <div>{props.selectedValue}</div>
            <br></br>
            <div>{props.clickCount}</div>
        </div>
    )
}
