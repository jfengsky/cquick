/**
 *
 */

import initState from './store/initialState'
import { GET_LIST } from './store/handle/request'
import HeaderModel from './model/HeaderModel'
import HeaderView from './view/HeaderView'
import TaskView from './view/TaskView'
$( ()=> {
  HeaderView.init()

  GET_LIST()
    .catch()
    .then( data => {

      new TaskView()
    })
})