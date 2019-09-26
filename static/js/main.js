$('.getDataById').click(function () {
    let id = $(this).data();
    $.post('/getDataById', id,  function (data) {
        console.log(data);
    });
});
