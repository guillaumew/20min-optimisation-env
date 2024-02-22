angular.module('diabolos',
 [])
	.controller('SpectaclesListController', function() {
		var spectaclesList = this;
		spectaclesList.spectacles = [
			
			{
				name:"Politiquement incorrect",
				date:new Date(Date.UTC(2023,09,14,18,30)),
				venue: "La Fabrique à Impros",
				Price: "9€",
				image:"img/politiquement_incorrect.jpg",
				link:"https://lafabriqueaimpros.com"
				
			},
			{
				name:"Impro-catch",
				date:new Date(Date.UTC(2023,09,29,18,00)),
				venue: "La Fabrique à Impros",
				Price: "9€",
				image:"img/cnic.jpg",
				link:"https://lafabriqueaimpros.com"
			},
			{
				name:"La vie secrète des livres",
				date:new Date(Date.UTC(2023,09,28,14,00)),
				venue: "Mediathèque Clisson",
				image:"img/mediatheque.jpg",
				link:"https://lafabriqueaimpros.com"
			},
			{
				name:"Kabaraoke",
				date:new Date(Date.UTC(2023,09,20,21,00)),
				venue: "La Fabrique à Impros",
				image:"img/kabaraoke.jpg",
				link:"https://lafabriqueaimpros.com"
			},
			
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
