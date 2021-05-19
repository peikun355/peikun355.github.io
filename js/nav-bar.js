$(function (){
    $(".dropdown-toggle").dropdown()
    $(".header").hide()
    $("#home").show()
    $("#btn").click(function () {

    })

    $("#homeBtn").click(function () {
        $(".header").hide()
        $("#home").show()
    })

    $("#newBtn").click(function () {
        $(".header").hide()
        $("#news").show()
    })

    $("#nav div ul li").click(function (){
        $(this).siblings('li').removeClass('active');  // 删除其兄弟元素的样式
        $(this).addClass('active');                    // 为点击元素添加类名
    })
})

