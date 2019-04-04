var $allButtons = $('#buttons>button')
//通过jQuery把符合CSS选择器（#buttons>button）的元素筛选出来,并封装成一个jQuery对象，取名为$allButtons。$allButtons是一个伪数组

let n = 0
let size = $allButtons.length
let timeId = setTimer()

// 执行过程
for (let i = 0; i < $allButtons.length; i++) {
    $($allButtons).on('click', function (x) {
        var index = $(x.currentTarget).index()
        var p = index * -300
        $('#images').css({
            transform: 'translateX(' + p + 'px)'
        })
        n = index
        activeButton($allButtons.eq(n))
    })
}
$('.window').on('mouseenter', function () {
    window.clearInterval(timeId)
})
$('.window').on('mouseleave', function () {
    setTimer()
})


// activeButton($Button)，playSlide(index)，setTimer()函数
function activeButton($Button) {
    $Button.addClass('red')
        .siblings('.red').removeClass('red')
}
function playSlide(index) {
    $allButtons.eq(index).trigger('click')
}
function setTimer() {
    return setInterval(() => {
        playSlide(n % size)
        n += 1
    }, 3000)
}
