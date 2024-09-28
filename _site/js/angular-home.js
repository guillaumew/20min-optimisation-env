angular.module('diabolos',
 [])
	.controller('SpectaclesListController', function() {
		var spectaclesList = this;
		spectaclesList.spectacles = [
			
			{
				name:"Derby avec les Titans",
				date:new Date(Date.UTC(2024,03,04,21,30)),
				venue: "La Fabrique à Impros",
				Price: "9€",
				image:"img/cnic.jpg",
				image_webp:"img/cnic.webp",
				link:"https://lafabriqueaimpros.com"
				
			},
			{
				name:"[Im]procès",
				date:new Date(Date.UTC(2024,03,06,18,30)),
				venue: "La Fabrique à Impros",
				Price: "9€",
				image:"img/improces.jpg",
				image_webp:"img/improces.webp",
				link:"https://lafabriqueaimpros.com"
			},
			{
				name:"La vie secrète des livres",
				date:new Date(Date.UTC(2024,03,19,19,30)),
				venue: "Maison de quartier des confluences",
				image:"img/mediatheque.jpg",
				image_webp:"img/mediatheque.webp",
				link:"https://lafabriqueaimpros.com"
			},
			{
				name:"Over-connected",
				date:new Date(Date.UTC(2024,08,25,18,30)),
				venue: "Halle 6",
				image:"img/over-connected.jpg",
				image_webp:"img/over-connected.webp",
				link:"https://lafabriqueaimpros.com"
			}
			
		];
	})
	.controller('ActorsListController',function(){
		var actorList = this;
		actorList.actors = [
			{name: "Guillaume",photo : "guillaume_wolf.jpg"},
			{name: "Arnaud",photo : "arnaud_mesnard.jpg"},
			{name: "Stephane",photo : "stephane_baikoff.jpg"},
			{name: "Sylvain",photo : "sylvain.jpg"},
			{name: "Juliette",photo : "juliette.jpg"},
			{name: "Julie",photo : "julie.jpg"},
			{name: "Adiren G",photo : "adrieng.jpg"},
			{name: "Anaïs",photo : "anais.jpg"},
			{name: "Frederic",photo : ""},
			{name: "Aude",photo : ""},
			{name: "Laurence",photo : ""},
			{name: "Christophe",photo : ""},
			{name: "Eleonore",photo : ""},
		];
		actorList.actors.forEach(function(element) {
			if(element.photo ===""){
				element.photo = "logo.jpg"
			}
    	element.order= 0.5 - Math.random();
    });
	})
;
