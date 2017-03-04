/**
 * Created by howie on 17/02/2017.
 */

$(function () {
    $('[data-toggle="popover"]').popover()
});


$(document).ready(function () {
    $('.move_up').click(function () {
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });
    $('.move_down').click(function () {
        $('html, body, .content').animate({scrollTop: $(document).height()}, 300);
        return false;
    });
    // bookmark
    $('#bookMark').click(function () {
        bookmarkurl = window.location.pathname + window.location.search;
        if ($(this).hasClass('bookMark')) {
            // add bookmark
            $.ajax({
                type: "post",
                contentType: "application/json",
                url: "/operate/add_bookmark?bookmarkurl=" + bookmarkurl,
                dataType: 'json',
                success: function (data) {
                    if (data.status == 1) {
                        $('#bookMark').removeClass('bookMark');
                        $('#bookMark').addClass('bookMarkAct');
                    }
                    if (data.status == -1) {
                        alert('您还没有登录');
                    }
                }
            });
        } else {
            // delete bookmark
            $.ajax({
                type: "post",
                contentType: "application/json",
                url: "/operate/delete_bookmark?bookmarkurl=" + bookmarkurl,
                dataType: 'json',
                success: function (data) {
                    if (data.status == 1) {
                        $('#bookMark').removeClass('bookMarkAct');
                        $('#bookMark').addClass('bookMark');
                    }
                    if (data.status == -1) {
                        alert('您还没有登录');
                    }
                }
            });
        }
    });
    // login
    $("#owllook_login").click(function () {
        var owllook_user = $("#owllook_user").val();
        var owllook_pass = $("#owllook_pass").val();
        if (owllook_user == "" || owllook_pass == "") {
            alert('不能有内容为空');
        } else {
            $.ajax({
                type: "post",
                contentType: "application/json",
                url: "/operate/login?user=" + owllook_user + "&pwd=" + owllook_pass,
                dataType: 'json',
                success: function (data) {
                    if (data.status == 1) {
                        location.reload();
                    }
                }
            });
        }
    });
});