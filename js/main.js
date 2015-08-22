var tag = document.createElement('script');

tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('ytplayer', {
		events: {
			'onReady': onPlayerReady
		}
	});
}

function onPlayerReady() {
	player.playVideo();
	player.mute();
}





google.load("swfobject", "2.1");
function onYouTubePlayerReady(playerId) {
youtubePlayer = document.getElementById("myyoutubePlayer");
youtubePlayer.playVideo();
youtubePlayer.mute();
}
var params = { allowScriptAccess: "always" };
var atts = { id: "myyoutubePlayer" };
swfobject.embedSWF("http://www.youtube.com/v/nJ6xtfsAuKA&list=PL_xLGCqFuhiE14hR7xA_wQCvyxVy_OfF_&feature=plpp_play_all?enablejsapi=1&playerapiid=youtubePlayer&controls=0&version=3&loop=1&autohide=1",
"youtubeNosound", "100%", "380", "8", null, null, params, atts);







var map = L.map('map').setView([37.786, -122.387], 14); 

var streetView = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', { //street layer of the map
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'soumontha.n64h2mm1',
    accessToken: 'pk.eyJ1Ijoic291bW9udGhhIiwiYSI6IjY5ZjFkMzVhNTgxMjY0Y2QxY2Q5MzI2NDgzOGEzNjRlIn0.sdDH-b1NZWXdunEkSZs_sQ'
}).addTo(map);

var comicView = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', { //outdoor layer of the map
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'soumontha.n64j9cdg',
    accessToken: 'pk.eyJ1Ijoic291bW9udGhhIiwiYSI6IjY5ZjFkMzVhNTgxMjY0Y2QxY2Q5MzI2NDgzOGEzNjRlIn0.sdDH-b1NZWXdunEkSZs_sQ'
}).addTo(map);

var satView = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', { //satellite layer of the map
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'soumontha.n64ip2gb',
    accessToken: 'pk.eyJ1Ijoic291bW9udGhhIiwiYSI6IjY5ZjFkMzVhNTgxMjY0Y2QxY2Q5MzI2NDgzOGEzNjRlIn0.sdDH-b1NZWXdunEkSZs_sQ'
}).addTo(map);

var layerViews = { //variable for map legend of the different layers
	"Street" : streetView,
	"Comic" : comicView,
	"Satellite" : satView,
};

var mapLegend = L.control.layers(layerViews).addTo(map);

var headquarters = L.marker([37.78853, -122.395144]).addTo(map);



$(document).on('ready', function(){
	
//	$(function () {
//		$('#btnUsingjQuery').click(function () {
//			alert('Alert using jQuery Function');
//		});
//	});
	
	$(function() {
		var pull = $('#pull');
			menu = $('nav ul');
			menuHeight	= menu.height();

		$(pull).on('click', function(e) {
			e.preventDefault();
			menu.slideToggle();
		});

		$(window).resize(function(){
        	var w = $(window).width();
        		if(w > 320 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        	}
    	});
	});
	
		// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	
	$('.view-details').on('click', function(event){ //  1. When user clicks a "view details" button
	console.log(event);
	var targetElement = event.target;
	var container = targetElement.parentElement.parentElement; // find the parent of that element.
	$(container).find('.details').each(function(index, el){ //  2. Within that parent, find all the elements that have the class `details`.
		if ($(el).is(':visible')){ //  3. Toggle visibility of all the elements within that parent with the class `details`.
			$(el).fadeOut();
			targetElement.innerText = "View Details";  //  4. Change the text of the "view details" button
		} else {
			$(el).fadeIn();
			targetElement.innerText = "Hide Details"; //  to read "hide details" so the user understands they can hide the text again.
		}
	});
});

	
	
		

});

