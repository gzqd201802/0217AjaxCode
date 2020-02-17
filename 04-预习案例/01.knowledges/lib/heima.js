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
      // 4.发送请求 post的数据在send中发送
      xhr.send(data)
      // 5.注册回调函数
      xhr.onload = function() {
        callback(xhr.responseText)
      }
    },
    get: function(url, data, callback) {
      // 1.实例化ajax对象 (小黄人对象)
      var xhr = new XMLHttpRequest()
      // 2.设置请求的方法和地址
      // 处理数据
      url += '?'
      url += data
      xhr.open('get', url)
      // 5.发送请求 post的数据在send中发送
      xhr.send();
      // 4.注册回调函数
      xhr.onload = function() {
        callback(xhr.responseText)
      }
    },
    // 可以发get和post
    // ajax: function(method, url, data, callback) {
    //   // 1.实例化ajax对象 (小黄人对象)
    //   var xhr = new XMLHttpRequest()
    //   // 2.设置请求的方法和地址
    //   if (method == 'get') {
    //     url += '?'
    //     url += data
    //   }
    //   xhr.open(method, url)
    //   // 3.设置请求头(post才需要)
    //   if(method=='post'){
    //     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    //   }
    //   // 4.注册回调函数
    //   xhr.onload = function() {
    //     callback(xhr.responseText)
    //   }
    //   // 5.发送请求 post的数据在send中发送
    //   if(method=='post'){
    //     xhr.send(data)
    //   }else{
    //     xhr.send()
    //   }
    // },
    // 使用对象版本
    /**
     *  method
     *  url
     *  data
     *  callback
     */
    ajax: function(options) {
      // 1.实例化ajax对象 (小黄人对象)
      var xhr = new XMLHttpRequest()
      // 2.设置请求的方法和地址
      if (options.method == 'get') {
        options.url += '?'
        options.url += options.data
      }
      xhr.open(options.method, options.url)
      // 3.设置请求头(post才需要)
      if(options.method=='post'){
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      }
      // 4.注册回调函数
      xhr.onload = function() {
        options.callback(xhr.responseText)
      }
      // 5.发送请求 post的数据在send中发送
      if(options.method=='post'){
        xhr.send(options.data)
      }else{
        xhr.send()
      }
    },
  }
})(window)
