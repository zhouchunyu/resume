!function(){
  view = document.querySelector(".messages");
  controller = {
    view: null,
    init: function(view){
      this.view = view;
      this.bindEvents();
      this.fetchMessges();
    },
    fetchMessges: function(){
      var ul = this.view.querySelector(".messages-content > ul");
      while (ul.hasChildNodes()) {
        ul.removeChild(ul.lastChild);
      }
      var query = new AV.Query('Message');
      query.find().then((messages) => {
        var array = messages.map((item) => item.attributes);
        array.forEach((item) => {
          li = document.createElement('li');
          li.textContent = `${item.name || "匿名"}: ${item.content}`;
          ul.appendChild(li);
        }
      )});
    },
    bindEvents: function(){
      this.view.addEventListener("submit", (event) => {
        event.preventDefault();
        var content = view.querySelector("#postMessageForm").querySelector("input[name=content]").value;
        var Message = AV.Object.extend('Message');
        var message = new Message();
        message.save({
          content: content
        }).then((object) => {
          this.fetchMessges();
        });
      });  
    }
  };
  controller.init(view);
}.call();