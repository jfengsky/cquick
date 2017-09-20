
import { ITFetchApiList } from '../src/interface'

import { apiList } from '../db/'

export default (body: ITFetchApiList) => {
  let {
    type
  } = body
  switch(type) {
    case 'search':
    return apiList.search()
  }
}