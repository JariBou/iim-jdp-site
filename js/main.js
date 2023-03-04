window.onload = function () {
    setScrollHeight();
}




var setScrollHeight = function() {
    var scroll = document.getElementById("scrollSpecs");
    var parent = scroll.parentNode;
    const parentHeight = parent.offsetHeight;
    scroll.style.setProperty("--height", (90 / 100 * parentHeight).toString() + "px");
    console.log(20 / 100 * parentHeight);
}

var setScrollHeight = function() {
    var scrolls = document.getElementsByClassName("scroll");

    for (let i = 0; i < scrolls.length; i++) {
        const scroll = scrolls[i];
        var parent = scroll.parentNode;
        const parentHeight = parent.offsetHeight;
        scroll.style.setProperty("--height", (90 / 100 * parentHeight).toString() + "px");
        console.log(20 / 100 * parentHeight);
        
    }
    
    // for (const scroll in scrolls) {
    //     var parent = scroll.parentNode;
    //     const parentHeight = parent.offsetHeight;
    //     scroll.style.setProperty("--height", (90 / 100 * parentHeight).toString() + "px");
    //     console.log(20 / 100 * parentHeight);
    // }

    
}
