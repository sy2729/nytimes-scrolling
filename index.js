// // console.log(window.innerHeight)
let wh = window.innerHeight || document.documentElement.clientHeight;

let bg = $('.bg');
let lastPositonIndex = 1;
window.onscroll = function() {
    let distance = window.pageYOffset
    let currentIndex = Math.floor(distance / wh) + 1;
    console.log('currentIndex----------------' + ' ' + currentIndex)
    console.log('lastpositionIndex----------------' + ' ' + lastPositonIndex)
    if(currentIndex !== lastPositonIndex) {
        console.log('不一样了一下')
        lastPositonIndex = currentIndex;
        bg.eq(1).add('active')
        bg.eq(currentIndex - 1).addClass('active').siblings().removeClass('active');
    }
    

    // console.log(distance)
    
    // for(let i = 0; i < bgs.length; i++) {
    //     if(isScrolledIntoView(bgs[i])) {
    //         console.log(i)
    //     }
        
    // }
  
}

// function isScrolledIntoView(el) {
//     var rect = el.getBoundingClientRect();
//     var elemTop = rect.top;
//     var elemBottom = rect.bottom;

//     // // Only completely visible elements return true:
//     // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
//     // Partially visible elements return true:
//     isVisible = elemTop < window.innerHeight && elemBottom >= 0;
//     return isVisible;
// }
