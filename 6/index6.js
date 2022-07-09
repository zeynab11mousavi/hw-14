$(document).ready(function () {

    // Add function;
    $(".add").click(function () {

        // last element's id of the class items;
        let lastid = $(".items:last").attr("id");
        let split_id = lastid.split("_");
        // console.log(split_id);
        let nextindex = Number(split_id[1]) + 1;

        // div
        $(".items:last").after(`<div class='element ' id='id_${nextindex}'></div>`);

        // p
        $(`#id_${nextindex}`)
            .append(`<p id='remove_${ nextindex}' class='remove d-flex align-items-center justify-content-center bg-light'>${$('input').val()}</p>`);

    });

    // Remove function;
    $('.container').on('click', '.remove', function () {

        let id = this.id;
        console.log(id);
        let handleId = id.split("_");
        let removeId = handleId[1];

        // Removing item
        $("#id_" + removeId).remove();

    });
});