import React from 'react'
import Header from './Header'
import View from './View'
import Footer from './Footer'

const App = ({state, onAdd, onReduce, fixed}) => {
    return(
        <div>
            <Header onAdd={onAdd} onReduce={onReduce} />
            <View state={state} />
            <Footer fixed={fixed} />
        </div>
    )
}

export default App