import * as React from 'react'
import { connect } from 'react-redux'

import { ITApiListInfo, ITApiCodeInfo} from '../../interfaces'
import { GetQueryString } from '../store/util'
import { FETCH_APICODE, ITApiCode } from '../store/fetch'
import { up_apiList } from '../action'

interface ITFetchApicodeRes {
  state: 0 | 1
  data: any
}

interface ITProps {
  upApiList: (props: Array<any>) => {}
  apiList: Array<ITApiListInfo>
}
interface ITState {
  id: number

  // 接口描述
  apiDesc: string

  apiCode: string

  // 接口文件名
  apiFileName: string
}

class Modify extends React.Component<ITProps, ITState> {
  constructor(props: ITProps) {
    super(props)
    this.state = {
      id: null,
      apiDesc: '',
      apiCode: '',
      apiFileName: null
    }
  }

  componentDidMount () {
    let id = GetQueryString('id')
    if(id) {
      this.setState({
        id: parseInt(id)
      })
    }
  }
  
  public render(): JSX.Element {
    let {
      id,
      apiDesc,
      apiCode,
      apiFileName
    } = this.state

    let {
      apiList
    } = this.props
    let name
    let desc
    let list: Array<any> = []
    apiList && apiList.filter(({id: _id, name: _name, desc: _desc, list: _list}: ITApiListInfo) => {
      if(_id === id) {
        name = _name
        desc = _desc
        list = _list
      }
    })
    
    debugger
    // TODO 显示当前api的fileName

    return (
      <div>
        <h4>{name}<em>{desc}</em></h4>
        <div>
          <label>代理文件切换:</label>
          <select value={apiFileName}>
            {
              list.map( (item: any, index: number): JSX.Element => <option key={index} value={item.fileName}>{item.desc}</option>)
            }
          </select>
        </div>
        <hr />
        <div>
          <div>
            <label>
              描述: <input type="text" value={apiDesc} onChange={ev => { this.setState({ apiDesc: ev.target.value.trim() }) }} />
            </label>
          </div>
          <div>
            <label>
              代码: <textarea value={apiCode} onChange={ev => { this.setState({ apiCode: ev.target.value }) }} />
            </label>
          </div>
          <button onClick={this.modifyApi}>编辑接口内容</button>
        </div>
      </div>
    )
  }

  private modifyApi = async () => {
    let {
      id,
      apiCode,
      apiDesc,
      apiFileName
    } = this.state

    let data: ITApiCodeInfo = {fileName: apiFileName, desc: apiDesc,code: apiCode, id}

    if(apiDesc){
      let param: ITApiCode = {
        type: 'write',
        data
      }
      let fetchState: ITFetchApicodeRes = await FETCH_APICODE(param)
      if(!fetchState.state){
        this.props.upApiList(fetchState.data.list)
        this.setState({
          apiCode: '',
          apiDesc: '',
          apiFileName: fetchState.data.list[fetchState.data.list.length - 1].fileName
        })
      }
    }
  }
}


interface ITStateToProps {
  apiList: Array<ITApiListInfo>
}
const mapStateToProps = (state: any): ITStateToProps => ({
  apiList: state.apiList
})

const mapDispatchToProps = (dispatch: any): any => ({
  upApiList: (data: Array<any>) => {
    dispatch(up_apiList(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Modify)