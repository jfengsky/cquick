module.exports = [
    // {
    //   pattern: 'CalendarInfo',
    //   responder:  "D:/nproxy/detail/cldt.js"
    // },
    // {
    //   pattern: 'DescriptionInfo',
    //   responder:  "D:/nproxy/detail/des.json"
    // },
  // {
  //   pattern: '1000136541',
  //   responder:  "D:/nproxy/visa/1000136541.html"
  // },
  // {
  //   pattern: 'InvoiceInfo',
  //   responder:  "D:/nproxy/order/InvoiceInfo"
  // },
  // {
  //   pattern: 'book.css',
  //   responder:  "D:/git/Tour/Front/Front.PC.Online/dest/ResVacationOnline/css/vacation_v1/book.css"
  // },
  // {
  //   pattern: 'book.css',
  //   responder:  "D:/git/Tour/Front/Front.PC.Online/dest/ResVacationTourOffline/ResVacationOffline/BookingCss/vacation_v2/group_detail20141013.css"
  // },
  {
    pattern: /http?:\/\/webresource.uat.qa.nt.ctripcorp.com\/ResVacationOnline\/R8\/js\/vacation\/app\/(\w+)\/(.*)\.(\w+)/,
    responder: '/cloe/code/Front.PC.Online/src/ResVacationOnline/js/vacation/app/$1/$2.$3'
  },
  {
    pattern: /http?:\/\/webresource.c-ctrip.com\/ResVacationOnline\/R8\/js\/vacation\/app\/(\w+)\/(.*)\.(\w+)/,
    responder: '/cloe/code/Front.PC.Online/src/ResVacationOnline/js/vacation/app/$1/$2.$3'
  },
  {
    pattern: /http?:\/\/webresource.fws.qa.nt.ctripcorp.com\/ResVacationOnline\/R8\/js\/vacation\/app\/(\w+)\/(.*)\.(\w+)/,
    responder: '/cloe/code/Front.PC.Online/src/ResVacationOnline/js/vacation/app/$1/$2.$3'
  }
];
