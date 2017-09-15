import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

interface ITProps {
  menu: Array<any>
}
interface ITState {

}

class Menu extends React.Component<ITProps, ITState> {
  public render(): JSX.Element {
    let {
      menu
    } = this.props
    return (
      <ul>
        {
          menu.map( (item: any, index: number): JSX.Element => (
            <li key={index}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))
        }
      </ul>
    )
  }
}


interface ITStateToProps {
  menu: Array<any>
}
const mapStateToProps = (state: any): ITStateToProps => ({
  menu: state.menu
})

export default connect(mapStateToProps)(Menu)