import * as React from 'react'
import {
  Route,
} from 'react-router-dom'

import initialState from './store/'
import { Menu, PageList, ApiList, Modify, Nproxy } from './components/cmps'

const components: any = {
  PageList,
  ApiList,
  Modify,
  Nproxy
}

interface ITProps {

}
interface ITState {

}

const Content = ({match}: any) => {
  debugger
}

class App extends React.Component<ITProps, ITState> {
  public render(): JSX.Element {
    let { menu } = initialState
    // menu.map(({ cmp, link, title }, index: number): JSX.Element => <Route key={index} exact={link === '/'} path={link} component={components[cmp] as any} />)
    return (
      <div>
        <Menu />
        {
          menu.map(({ cmp, link, title }, index: number): JSX.Element => <Route key={index} exact={link === '/'} path={link} component={components[cmp] as any} />)
        }
      </div>
    )
  }
}

export default App