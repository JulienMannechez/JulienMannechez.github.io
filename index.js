window.onload = function() {
    $('.tablinks').on('click', function() {
        let page = $(this).attr('data-ref');

        $('.tablinks').removeClass('active');
        $(this).addClass('active');

        $('.tabcontent').addClass('d-none');
        $('#' + page).removeClass('d-none');
    });
};