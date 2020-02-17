// 沙箱
// 自执行函数
// ;目的跟之前的分隔开来
;(function(window) {
  window.heima = {
    post: function(url, data, callback) {
      // 1.实例化ajax对象 (小黄人对象)
      var xhr = new XMLHttpRequest()
      // 2.设置请求的方法和地址
      xhr.open('post', url)
      // 3.设置请求头(post才需要)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      // 4.注册回调函数
      xhr.onload = function() {
        callback(xhr.responseText)
      }
      // 5.发送请求 post的数据在send中发送
      xhr.send(data)
    },
    get: function(url, data, callback) {
      // 1.实例化ajax对象 (小黄人对象)
      var xhr = new XMLHttpRequest()
      // 2.设置请求的方法和地址
      // 处理数据
      url += '?'
      url += data
      xhr.open('get', url)
      // 4.注册回调函数
      xhr.onload = function() {
        callback(xhr.responseText)
      }
      // 5.发送请求 post的数据在send中发送
      xhr.send()
    }
  }
})(window)
