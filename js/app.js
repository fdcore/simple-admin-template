// https://github.com/tristen/tablesort

$(document).ready(function () {

    new Tablesort(document.getElementById('table'));

    if ($('#search-table').length > 0) {
        var jets = new Jets({
          searchTag: '#search-table',
          contentTag: '#table tbody',
        });
    }

    if ($('.navbar input').length > 0) {


        $('.navbar input').focusout(function(){
            $(this).parent().removeClass('open');
        });
        $('.navbar input').focusin(function(){
            if($(this).val() != ''){
                $(this).parent().addClass('open');
            }
        });
        $('.navbar input').keyup(function(){
            if($(this).val() != ''){
                $(this).parent().addClass('open');
            } else {
                $(this).parent().removeClass('open');
            }
        });

        var jets = new Jets({
          searchTag: '.navbar input',
          contentTag: '.navbar .search-results',
        });
    }


    $.mockjax({
          url: /\/contacts\/.*/,
          responseTime: 750,
          headers : { 'X-IC-Remove' : "true" }
        });


});
