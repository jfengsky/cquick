import * as React from 'react'
import { connect } from 'react-redux'

import { up_nproxy, up_apiList } from '../action'

import {ITApiListInfo, ITNproxyInfo } from '../../interfaces'

import {
  FETCH_NPROXY, ITNproxy,
  FETCH_APIINFO, ITApiInfo
} from '../store/fetch'

const filePath: string = '/nproxy/order/'

interface ITProps {
  upNproxyList: (prop: any) => {}
  upApiList: (props: any) => {}
  nproxyList: Array<ITNproxyInfo>
  apiList: Array<ITApiListInfo>
  OS: string
  nproxyPath: string
}
interface ITState {
  addNproxyName: string
  addNproxyDesc: string
}

class Nproxy extends React.Component<ITProps, ITState> {
  constructor(props: any) {
    super(props)
    this.state = {
      addNproxyName: '',
      addNproxyDesc: ''
    }
  }

  public render(): JSX.Element {
    let {
      OS,
      nproxyList
    } = this.props

    let {
      addNproxyName,
      addNproxyDesc
    } = this.state

    return (
      <div>
        <h4>当前操作系统是: {OS === 'darwin' ? 'MAC OS' : OS}</h4>
        <h5>代理列表</h5>
        <ul>
          {
            !!nproxyList && nproxyList.map((item: any, index: number): JSX.Element => (<li key={index} style={{ 'borderTop': '1px dotted #ccc' }}>
              <div>{item.pattern}</div>
              <div>{item.responder}</div>
              <button onClick={ev => { this.removeNproxy(index) }}>删除</button>
            </li>))
          }
        </ul>
        <div>
          <div>
            <label>
              接口名:
              <input type="text" style={{width: 500, height: 40,fontSize: 20}} value={addNproxyName} onChange={ev => { this.setState({ addNproxyName: ev.target.value.trim() }) }} />
            </label>
          </div>
          <div>
            <label>
              接口描述:
              <textarea style={{width: 500, height: 200,fontSize: 20}} value={addNproxyDesc} onChange={ev => { this.setState({ addNproxyDesc: ev.target.value.trim() }) }} />
            </label>
          </div>
          <button onClick={this.addNproxy}>新增代理</button>
        </div>
      </div>
    )
  }

  // 添加代理
  addNproxy = async (ev: React.MouseEvent<HTMLButtonElement>) => {
    let {
      addNproxyName,
      addNproxyDesc
    } = this.state
    let {
      nproxyList,
      nproxyPath,
      apiList
    } = this.props
    if (addNproxyName) {

      /**
       * 处理接口列表
       */
      let newApiList: Array<ITApiListInfo> = [...apiList]
      // 判断是否重名
      let hasItem = newApiList.some( (item: ITApiListInfo): boolean => item.name === addNproxyName)
      if(!hasItem){
        newApiList.push({
          id: apiList.length ? apiList[apiList.length - 1].id + 1 : 0,
          name: addNproxyName,
          desc: addNproxyDesc,
          list: []
        })

        let apiParam: ITApiInfo = {
          type: 'write',
          data: JSON.stringify(newApiList)
        }

        let apiWriteState = await FETCH_APIINFO(apiParam)
        if (!apiWriteState.state) {
          this.props.upApiList(newApiList)
        }

      } else {
        alert('has addNproxyName')
        return false
      }


      /**
       * 处理代理列表
       */
      let newNproxyList: Array<ITNproxyInfo> = [...nproxyList]
      newNproxyList.push({
        pattern: addNproxyName,
        responder: nproxyPath + filePath + addNproxyName
      })
      this.setState({
        addNproxyName: '',
        addNproxyDesc: ''
      })
      let param: ITNproxy = {
        type: 'write',
        data: JSON.stringify(newNproxyList)
      }
      let writeState = await FETCH_NPROXY(param)
      if (!writeState.state) {
        this.props.upNproxyList(newNproxyList)
      }
    }
    

  }

  // 删除代理
  removeNproxy = async (index: number) => {
    let {
      nproxyList,
      upNproxyList,
      apiList,
      upApiList
    } = this.props
    let newNproxyList = [...nproxyList]
    let newApiList = [...apiList]
    newNproxyList.splice(index, 1)
    newApiList.splice(index, 1)

    let apiParam: ITApiInfo = {
      type: 'write',
      data: JSON.stringify(newApiList)
    }
    let apiWriteState = await FETCH_APIINFO(apiParam)
    if (!apiWriteState.state) {
      upApiList(newApiList)
    }

    let param: ITNproxy = {
      type: 'write',
      data: JSON.stringify(newNproxyList)
    }
    let writeState = await FETCH_NPROXY(param)
    if (!writeState.state) {
      upNproxyList(newNproxyList)
    }
  }
}

interface ITStateToProps {
  nproxyList: Array<ITNproxyInfo>
  apiList: Array<ITApiListInfo>
  OS: string
  nproxyPath: string
}

const mapStateToProps = (state: any): ITStateToProps => ({
  apiList: state.apiList,
  nproxyList: state.nproxyList,
  OS: state.OS,
  nproxyPath: state.nproxyPath
})
const mapDispatchToProps = (dispatch: any): any => ({
  upNproxyList: (data: Array<ITNproxyInfo>) => {
    dispatch(up_nproxy(data))
  },
  upApiList: (data: Array<ITApiListInfo>) => {
    dispatch(up_apiList(data))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Nproxy)