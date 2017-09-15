import * as React from 'react'
import { connect } from 'react-redux'

import { add_nproxy, up_nproxy } from '../action'

import { FETCH_NPROXY, ITNproxy } from '../store/fetch'

const filePath: string = '/nproxy/order/'

interface ITProps {
  addNproxyList: (prop: any) => {}
  upNproxyList: ( prop:any ) => {}
  nproxyList: Array<any>
  OS: string
  nproxyPath: string
}
interface ITState {
  addNproxyName: string
}

class Nproxy extends React.Component<ITProps, ITState> {
  constructor(props: any){
    super(props)
    this.state = {
      addNproxyName: ''
    }
  }
  async componentDidMount() {
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
      OS,
      nproxyList
    } = this.props
    return (
      <div>
        <h4>当前操作系统是: {OS === 'darwin' ? 'MAC OS': OS }</h4>
        <div>
          <input type="text" value={this.state.addNproxyName} onChange={ ev=> { this.setState({addNproxyName: ev.target.value.trim()})}} />
          <button onClick={this.addNproxy}>新增代理</button>
        </div>
        <h5>代理列表</h5>
        <ul>
          {
            !!nproxyList && nproxyList.map((item: any, index: number): JSX.Element => (<li key={index} style={{'borderTop': '1px dotted #ccc'}}>
              <div>{item.pattern}</div>
              <div>{item.responder}</div>
              <button onClick={ev => { this.removeNproxy(index) }}>删除</button>
            </li>))
          }
        </ul>
      </div>
    )
  }

  // 添加代理
  addNproxy = async (ev: React.MouseEvent<HTMLButtonElement>) => {
    let {
      addNproxyName
    } = this.state
    let {
      nproxyList,
      nproxyPath
    } = this.props
    if(addNproxyName){
      let newNproxyList: Array<any> = [...nproxyList]
      newNproxyList.push({
        pattern: addNproxyName,
        responder: nproxyPath + filePath +addNproxyName
      })
      this.setState({
        addNproxyName: ''
      })
      let param: ITNproxy = {
        type: 'write',
        data: JSON.stringify(newNproxyList)
      }
      let writeState = await FETCH_NPROXY(param)
      if(!writeState.state){
        this.props.upNproxyList(newNproxyList)
      }
    }
    // let value = this.props.refs.addNproxy as HTMLInputElement
  }

  // 删除代理
  removeNproxy = async (index: number) => {
    console.log(index)
    // TODO
    debugger
  }
}


interface ITStateToProps {
  nproxyList: Array<any>
  OS: string
  nproxyPath: string
}

const mapStateToProps = (state: any): ITStateToProps => ({
  nproxyList: state.nproxyList,
  OS: state.OS,
  nproxyPath: state.nproxyPath
})
const mapDispatchToProps = (dispatch: any): any => ({
  addNproxyList: (data: Array<any>) => {
    dispatch(add_nproxy(data))
  },
  upNproxyList: (data: Array<any>) => {
    dispatch(up_nproxy(data))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Nproxy)