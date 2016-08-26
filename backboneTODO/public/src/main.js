/**
 *
 */

import initState from './store/initialState'
import { GET_LIST } from './store/handle/request'
import HeaderModel from './model/HeaderModel'
import HeaderView from './view/HeaderView'
$.ready( ()=> {

  HeaderView.init()

  GET_LIST()
    .catch()
    .then( data => {

    })
})