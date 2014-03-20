#angular.element(document).ready ->
#  angular.module('myApp', []).controller('fileListcontrol',[
#    '$scope'
#    '$http'
#    ($scope, $http) ->
#      $http(
#        method: 'get'
#        url: './pageinfo'
#        catche: false
#      ).success (data, status) ->
#        $scope.filelist = data
#        console.log $scope
#        return
#      return
#  ]);
#
#  angular.bootstrap(document, ['myApp']);
#
#  return

$ ($) ->
  FileList = () ->
    self = @
    ###
     *  图标
    ###
    @_icon = (data) ->
      spanIcon

      switch data.type
        when 'open' then spanIcon = '<span class="glyphicon glyphicon-folder-open"></span>'
        when 'close' then spanIcon = '<span class="glyphicon glyphicon-folder-close"></span>'
        else spanIcon = '<span class="glyphicon glyphicon-file"></span>'
      spanIcon

    ###
     *  模板
    ###
    @_tpl = (data) ->
      tpl = ''
      data.forEach (item) ->
        tpl += '<tr>'+
                '<td>' +
                  self._icon(item) +
                  '<a href="'+item.href+'">' + item.name + '</a>' +
                '</td>' +
                '<td>' + item.size + '</td>' +
                '<td>' + item.mtime + '</td>' +
              '</tr>';
        return
      $('#J_filelist').html tpl
      return

    ###
     *  初始化
    ###
    @init = () ->
      $.ajax(
        type: 'get'
        url: './pageinfo'
        catche: false
        success: (data) ->
          console.log data
          self._tpl(data);
          return
      )
      return
    return

  new FileList().init();
  return