/**
 * Created by lihuifang on 2016/11/7.
 */

var data = [{
    id: 1,
    barcode: 'bbc111'
},{
    id: 2,
    barcode: 'bbc111'
},{
    id: 3,
    barcode: 'abc777'
},{
    id: 4,
    barcode: 'abc222'
},{
    id: 5,
    barcode: 'abc222'
},{
    id: 6,
    barcode: 'abc333'
},{
    id: 7,
    barcode: 'abc333'
},{
    id: 8,
    barcode: 'abc333'
},{
    id: 9,
    barcode: 'abc333'
},{
    id: 10,
    barcode: 'abc444'
},{
    id: 11,
    barcode: 'abc444'
},{
    id: 12,
    barcode: 'abc555'
}]

// 首先去重
var tempObj = {}
data.map( item => {
    tempObj[item.barcode] = item
})


var newData = []
for(var key in tempObj){
    newData.push(key)
}

var stepArray = []
newData.map( item => {
    var rs = 0;
    data.map( (barItem, index) => {
        barItem.rs = 0
        barItem.show = false
        if(item === barItem.barcode) {
            rs++;
        }
    })
    stepArray.push(rs)
})


var dataIndex = 0
stepArray.map( item => {

    if(item > 1){
        data[dataIndex].rs = item
        data[dataIndex].show = true
    } else if(item === 1) {
        data[dataIndex].show = true
    }
    dataIndex = dataIndex + item
})

var bgColorList = ['red', 'gray', 'green', 'blue']

var data1 = [{
    id: 1,
    barcode: 'bbc111',
    rs: 2,
    show: true,
    bgColor: 0
},{
    id: 2,
    barcode: 'bbc111',
    rs: 0,
    show: false,
    bgColor: 0
},{
    id: 3,
    barcode: 'abc777',
    rs: 0,
    show: true,
    bgColor: 1
},{
    id: 4,
    barcode: 'abc222',
    rs: 2,
    show: true,
    bgColor: 2
},{
    id: 5,
    barcode: 'abc222',
    rs: 0,
    show: false,
    bgColor: 2
},{
    id: 6,
    barcode: 'abc333',
    rs: 4,
    show: true
},{
    id: 7,
    barcode: 'abc333',
    rs: 0,
    show: false
},{
    id: 8,
    barcode: 'abc333',
    rs: 0,
    show: false
},{
    id: 9,
    barcode: 'abc333',
    rs: 0,
    show: false
},{
    id: 10,
    barcode: 'abc444',
    rs: 2,
    show: false
},{
    id: 11,
    barcode: 'abc444',
    rs: 0,
    show: false
},{
    id: 12,
    barcode: 'abc555',
    rs: 0,
    show: true
}]

var tpl = '';

data.map( item => {
    if(item.rs > 1){
        tpl += '<tr>' +
            '<td>' + item.id + '</td>' +
            '<td>' + item.barcode + '</td>' +
            '<td rowspan="' + item.rs + '">按钮</td>' +
            '</tr>'
    } else {
        if(item.show){
            tpl += '<tr>' +
                '<td>' + item.id + '</td>' +
                '<td>' + item.barcode + '</td>' +
                '<td>按钮</td>' +
                '</tr>'
        } else {
            tpl += '<tr>' +
                '<td>' + item.id + '</td>' +
                '<td>' + item.barcode + '</td>' +
                '</tr>'
        }
    }
})

/*
<tr>
    <td rowspan="2"></td>
</tr>
 */

$('table').html(tpl)