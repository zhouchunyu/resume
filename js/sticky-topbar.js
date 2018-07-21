!function(){
    var view = topNavbar;
    var controller = {
        view: null,
        init: function(view){
            this.view = view;
            this.bindEvents();
        },
        bindEvents: function() {
            window.onscroll = (event) => {
                if(window.scrollY > 0){
                    this.view.classList.add("sticky");
                } else{
                    this.view.classList.remove("sticky");
                }
                scrollableTags = document.querySelectorAll("[data-scrollY]");
                minIndex = 0;
                for(var i = 1; i < scrollableTags.length; i++){
                    if(Math.abs(scrollableTags[i].offsetTop - window.scrollY) < Math.abs(scrollableTags[minIndex].offsetTop - window.scrollY)){
                        minIndex = i;
                    }
                }
                aTag = document.querySelector(`a[href="#${scrollableTags[minIndex].id}"]`);
                aTags = this.view.querySelectorAll("nav>ul>li>a");
                for(var i=0; i<aTags.length; i++){
                    aTags[i].classList.remove("active");
                }
                aTag.classList.add("active");
            }
        }
    }
    controller.init(view);
}.call();