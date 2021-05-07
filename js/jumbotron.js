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
})

