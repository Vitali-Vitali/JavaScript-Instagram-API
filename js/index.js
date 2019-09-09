var token = '7939322649.186d208.5bf1cb7ba6e44bbb8a1c0ce1de4589f5',
    num_photos = 8;//number of pictures to show

var photoIndex = 0;
$.ajax({
    url: 'https://api.instagram.com/v1/users/self/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
        for( x in data.data ){
            $('.row').append('<div class="column">' +
                '<img src="'+data.data[x].images.standard_resolution.url+'" style="width:80%; display:block;margin:auto;" onclick="openModal();currentSlide('+photoIndex++ +')" class="hover-shadow cursor"></div>');
            $('.modal-content').append('<div class="mySlides"><img src="'+data.data[x].images.standard_resolution.url+'" style="width:100%"></div>');
        }
    },
    error: function(data){
        console.log(data);
    }
});

