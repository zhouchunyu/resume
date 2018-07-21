!function(){
  var APP_ID = 'LC2vIK2pDHa0A5C0sbogVrzW-gzGzoHsz';
  var APP_KEY = 'buCReQJXMRz6JX44I3qEvFpX';
  // 存储服务
  console.log(APP_ID)
  var { Query, User } = AV;
  AV.init({appId: APP_ID, appKey: APP_KEY});
  console.log("success");
  var TestObject = AV.Object.extend('TestObject');
  var testObject = new TestObject();
  testObject.save({
    words: 'Hello World!'
  }).then(function(object) {
    alert('LeanCloud Rocks!');
  });
}.call()