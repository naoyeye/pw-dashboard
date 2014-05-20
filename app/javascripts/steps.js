/*global $*/

/* 
* @Author: hanjiyun
* @Date:   2014-05-19 13:16:35
* @Last Modified by:   hanjiyun
* @Last Modified time: 2014-05-20 18:43:28
*/

$(function () {

    var ufoList = $('.ufo');
    var testNum;

    function getNewData() {
        $.ajax({
            type : 'GET',
            dataType: 'json',
            url:  'http://192.168.108.178:9000/teams/',
            success: function (data) {

                for (var index = 0, len = data.results.length; index < len; index++) {
                    var select = index + 1;
                    $('.ufo-' + select).parents('.steps').eq(0).addClass('step-' + data.results[index].progress);
                }

                setTimeout(function () {
                    getNewData();
                }, 5000);
            },
            error: function (error) {
                $('.steps').hide();
                $('body').append('<div class="error-message">出错了 (>_<) </div>');
            }
        });
    }

    getNewData();
});
