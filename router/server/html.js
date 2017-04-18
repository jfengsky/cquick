import React from 'react'
import { renderToString } from 'react-dom/server'

const Home = () => (
  <div>
    home2
  </div>
)

const content = renderToString(<Home />)

export default content