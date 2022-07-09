$(document).ready(function () {

    $("button").click(function () {

    
        $.ajax({
            url: "https://62c46c937d83a75e39f997d9.mockapi.io/users/account",
            success: function (response) {
                response.forEach(element => {

                    $('tbody').append(`
                    
                <tr id="${element.id}">
                    <td>${element.name}</td>
                    <td>${element.job}</td>
                    <td><img src = '${element.image}' style = "width: 60px; height: 60px;"/></td>
                </tr>    

                    `)

                });
                
            }
        });
    });
})