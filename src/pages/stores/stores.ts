import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-stores',
  templateUrl: 'stores.html'
})
export class StorePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'chicago, il';
  end = 'chicago, il';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad(){
    this.initMap();
  }
  initMap() {

    var locations = [
      ['London', 51.507351, -0.127758, 4],
      ['Amsterdam', 52.370216, 4.895168, 5],
      ['Berlin', 52.520008, 13.404954, 3],
      ['Paris', 48.856613, 2.352222, 2],
      ['Copenhagen', 55.676098, 12.568337, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: new google.maps.LatLng(52.126955,7.094928),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

  }

}
