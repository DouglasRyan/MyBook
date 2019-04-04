let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()
buttonEvents()

//控制上下页切换
$(next).on('click',function () {
    goToSlide(current+1)
})
$(previous).on('click',function () {
    goToSlide(current-1)
})
//控制自动播放
let timer =setInterval(function () {
    goToSlide(current+1)
},1500)
$('.container').on('mouseenter',function () {
    window.clearInterval(timer)
}).on('mouseleave',function () {
    timer =setInterval(function () {
        goToSlide(current+1)
    },1500)
})
//展示假的首页
function makeFakeSlides(){
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length - 1).clone(true)
    $slides.append($firstCopy)
    $slides.prepend($lastCopy)
    $slides.css({transform: 'translateX(-300px)'})
}
//切换到应该到
function goToSlide(index){
    if (index>$buttons.length-1){
        index=0
    }else if(index<0){
        index=$buttons.length-1
    }
    if(current===$buttons.length-1 && index===0) {
        //最后一张到第一张
        console.log("这是从最后一张到copy第一张")
        $slides.css({transform: `translateX(${-(current+2)*300}px)`})
            .one('transitionend', function () {
                $slides.hide().offset()
                $slides.css({transform:`translateX(${-(index+1)*300}px)`}).show()
                //.css({display:"flex"})
                console.log("更换copy第一张为第一张")
            })
    }else if(current===0 && index===$buttons.length-1){
        //第一张到最后一张
        console.log("这是从第一张到copy最后一张")
        $slides.css({transform: 'translateX(0px)'})
            .one('transitionend', function () {
                $slides.hide().offset()
                $slides.css({transform:`translateX(${-(index+1)*300}px)`}).show()
                console.log("更换copy最后一张为第一张")
            })
    }else{
        $slides.css({transform:`translateX(${-(index+1)*300}px)`})
    }
    current = index
}
function buttonEvents() {
    $('#buttonWrapper').on('click','button',function (e) {
        let $button=$(e.currentTarget)
        let index=$button.index()
        goToSlide(index)
    })
}
    // $buttons.eq(0).on('click', function () {
    //     if (current === 3) {
    //         console.log("这是从第4张到第1张")
    //         $slides.css({transform: 'translateX(-1500px)'})
    //             .one('transitionend', function () {
    //                 $slides.hide()
    //                     .offset()
    //                 $slides.css({transform: 'translateX(-300px)'})
    //                     .show()
    //
    //             })
    //         // $slides.css({transform:"translateX(-1600px)"})
    //     } else {
    //         $slides.css({
    //             transform: "translateX(-300px)"
    //         })
    //     }
    //     current = 0
    //     console.log(current)
    //
    // })
    // $buttons.eq(1).on('click', function () {
    //     $slides.css({
    //         transform: "translateX(-600px)"
    //     })
    //     current = 1
    //     console.log(current)
    // })
    // $buttons.eq(2).on('click', function () {
    //     $slides.css({
    //         transform: "translateX(-900px)"
    //     })
    //     current = 2
    //     console.log(current)
    // })
    // $buttons.eq(3).on('click', function () {
    //     if (current === 0) {
    //         console.log("这是从第1张到第4张")
    //         $slides.css({transform: 'translateX(0)'})
    //             .one('transitionend', function () {
    //                 $slides.hide()
    //                     .offset()
    //                 $slides.css({transform: 'translateX(-1200px)'})
    //                     .show()
    //                 console.log("zhege")
    //             })
    //     } else {
    //         $slides.css({
    //             transform: "translateX(-1200px)"
    //         })
    //     }
    //     current = 3
    //     console.log(current)
    // })





// $($buttons[0]).on('click',function () {
//     if (current===3){
//         console.log("这是从第4张到第1张")
//         // $slides.css({transform:"translateX(-1600px)"})
//     }
//     $slides.css({
//         transform:"translateX(-300px)"
//     })
//     current =0
//     console.log(current)
// })
// $($buttons[1]).on('click',function () {
//     $slides.css({
//         transform:"translateX(-600px)"
//     })
//     current =1
//     console.log(current)
// })
// $($buttons[2]).on('click',function () {
//     $slides.css({
//         transform:"translateX(-900px)"
//     })
//     current =2
//     console.log(current)
// })
// $($buttons[3]).on('click',function () {
//     if (current===0){
//         console.log("这是从第1张到第4张")
//     }
//     $slides.css({
//         transform:"translateX(-1200px)"
//     })
//     current =3
//     console.log(current)
// })

// let $buttons = $('#buttonsWrapper > button')
// let $slides =$('#slides')
// console.log($slides)


// $buttons.eq(0).on('click',function(){
//     $slides.css({
//         transform:'translateX(0px)'
//     })
// })

// $buttons.eq(1).on('click',function(){
//     $slides.css({
//         transform:'translateX(-300px)'
//     })
// })
// $buttons.eq(2).on('click',function(){
//     $slides.css({
//         transform:'translateX(-600px)'
//     })
// })
// $buttons.eq(3).on('click',function(){
//     $slides.css({
//         transform:'translateX(-900px)'
//     })
// })