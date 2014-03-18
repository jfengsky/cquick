$(document).ready ->
  $.ajax(
    url: "./pageinfo"
    type: "get"
    dataType: "json"
    success: (data) ->

  )