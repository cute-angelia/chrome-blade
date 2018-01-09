let f = function () {
    $('.noclick-small-banner, .sinclubbar, .noclick-large-banner').remove();
    $('#loadallbutton').click();
    $('#block-comments, #block-toolbar, #histats_counter, center').remove();
    $(".coffee-1380-span-8").removeClass('coffee-1380-span-8').addClass('coffee-1380-span-12');
    $("#footer").remove();
}

export default f;