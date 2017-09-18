import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { ITApiListInfo } from '../../interfaces'

interface ITProps {
  apiList: Array<ITApiListInfo>
}
interface ITState {

}

class ApiList extends React.Component<ITProps, ITState> {
  public render(): JSX.Element {
    let {
      apiList
    } = this.props
    return (
      <ul>
        {
          !!apiList && apiList.map( (item: ITApiListInfo, index: number): JSX.Element => {
            let url = "/modify?id=" + item.id
            return <li key={index} style={{borderBottom: '1px solid #ccc'}}><Link to={url}>{item.name}</Link><em>{item.desc}</em></li>
          })
        }
      </ul>
    )
  }
}


interface ITStateToProps {
  apiList: Array<ITApiListInfo>
}
const mapStateToProps = (state: any): ITStateToProps => ({
  apiList: state.apiList
})

export default connect(mapStateToProps)(ApiList)