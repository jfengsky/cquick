import $ from 'jquery'

$('#J_click').bind('click', ev => {
    require.ensure(['./mod1'], ()=> {
        require('./mod1')
    })
})