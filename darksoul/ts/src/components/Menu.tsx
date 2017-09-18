import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { FETCH_NPROXY, ITNproxy, FETCH_APIINFO, ITApiInfo } from '../store/fetch'
import { add_nproxy, up_nproxy, up_apiList } from '../action'

interface ITProps {
  addNproxyList: (prop: any) => {}
  upApiList: (prop: any) => {}
  menu: Array<any>
  nproxyList: Array<any>
  OS: string
  nproxyPath: string
}
interface ITState {

}
class Menu extends React.Component<ITProps, ITState> {
  async componentDidMount() {
    // 获取api数据
    let apiParam: ITApiInfo = {
      type: 'read'
    }
    let apiData = await FETCH_APIINFO(apiParam)
    if(!apiData.state){
      let {
        list: apiList
      } = apiData.data
      this.props.upApiList([...apiList])
    }

    // 获取代理数据
    let param: ITNproxy = {
      type: 'read'
    }
    // 读取磁盘代理文件信息
    let data = await FETCH_NPROXY(param)
    if (!data.state) {
      let {
        OS,
        info
      } = data.data

      // 文件信息更新到store
      this.props.addNproxyList({
        nproxyList: JSON.parse(info),
        OS
      })
    }
  }
  
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
  nproxyList: Array<any>
  OS: string
  nproxyPath: string
}
const mapStateToProps = (state: any): ITStateToProps => ({
  menu: state.menu,
  nproxyList: state.nproxyList,
  OS: state.OS,
  nproxyPath: state.nproxyPath
})
const mapDispatchToProps = (dispatch: any): any => ({
  addNproxyList: (data: Array<any>) => {
    dispatch(add_nproxy(data))
  },
  upApiList: (data: Array<any>) => {
    dispatch(up_apiList(data))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Menu)