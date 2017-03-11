import React from 'react'

const Footer = ({fixed}) => {
    return (
        <div>
            <input type="checkbox" onChange={fixed} /> toFixed
        </div>
    )
}

export default Footer