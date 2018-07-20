lis = document.getElementsByClassName("menuTrigger");
for(let i = 0; i < lis.length; i++){
    lis[i].onmouseenter = function(event){
        let li = event.currentTarget;
        let ul = li.getElementsByTagName("ul")[0];
        ul.classList.add("active");
    } 
    lis[i].onmouseleave = function(event){
        let li = event.currentTarget;
        let ul = li.getElementsByTagName("ul")[0];
        ul.classList.remove("active");
    }
}
aTags = document.querySelectorAll(".topNavBar nav>ul>li.scrollable>a");
for(let i = 0; i < aTags.length; i++){
    aTags[i].onclick = function(x){
        x.preventDefault();
        let aTag = x.currentTarget;
        let href = aTag.getAttribute('href');
        target = document.querySelector(href);
        animate_scrollTo(window.scrollY, target.offsetTop - 80);
    }
}

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

function animate_scrollTo(y_start, y_target){
    var coords = {y: y_start};
    var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
    .to({y: y_target }, 500) // Move to (300, 200) in 1 second.
    .easing(TWEEN.Easing.Quadratic.In) // Use an easing function to make the animation smooth.
    .onUpdate(function() { // Called after tween.js updates 'coords'.
        // Move 'box' to the position described by 'coords' with a CSS translation.
        window.scrollTo(0, coords.y);
    })
    .start();
}