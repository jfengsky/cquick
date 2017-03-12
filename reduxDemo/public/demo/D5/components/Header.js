import React from 'react'
const Header = ({onAdd, onReduce}) => {
    return (
        <div>
            <button type="button" onClick={onAdd}> + </button>
            <button type="button" onClick={onReduce}> - </button>
        </div>
    )
}

export default Header