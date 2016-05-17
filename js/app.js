$(document).ready(function() {
	
	$('form').submit(function(e) {
  e.preventDefault();
	var value = $('input[name="search"]').val();
	console.log(value);
  $.ajax('https://api.spotify.com/v1/search?q='+value+'&type=track', {
     dataType: 'json',
     contentType: 'application/json',
     cache: false
  })
  .done(function(response){
    console.log(response);
    var html;
    $.each(response.tracks.items, function(index, element){
      html = '<div class="image">';
      html += '<img src='+ element.album.images[0].url +'alt="album" heigth="'+ element.album.images[0].height + 'width= "'+ element.album.images[0].width +'">';
      html +='</div>';
      
      $('body').append(html);
    });
  }); 
});
});