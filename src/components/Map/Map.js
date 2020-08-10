import React, { useEffect } from 'react';

const Map = (props) => {

  useEffect(() => {

    const initMap = () => {
      // Custom Silver Map
      var styledMapType = new window.google.maps.StyledMapType(
        require('./MapStyles.json')
      )
      const map = new window.google.maps.Map(
        document.getElementById(props.id),
        {
          center: { lat: 51.5174, lng: 0.0278 },
          zoom: 11,
          disableDefaultUI: true,
          zoomControl: true
        }
      );
      map.mapTypes.set('styled_map', styledMapType);
      map.setMapTypeId('styled_map');


      var iconBase1 = require('../../static/images/pin1.png');
      var iconBase2 = require('../../static/images/pin2.png');
      var iconBase3 = require('../../static/images/pin3.png');
      var iconBase4 = require('../../static/images/pin4.png');
      var iconBase5 = require('../../static/images/pin5.png');

      var icons = {
        info1: {
          icon: iconBase1
        },
        info2: {
          icon: iconBase2
        },
        info3: {
          icon: iconBase3
        },
        info4: {
          icon: iconBase4
        },
        info5: {
          icon: iconBase5
        }
      };

      var features = [
        {
          position: new window.google.maps.LatLng(51.5574, 0.1279),
          type: 'info1'
        },
        {
          position: new window.google.maps.LatLng(51.5821, 0.1516),
          type: 'info2'
        },
        {
          position: new window.google.maps.LatLng(51.4121, 0.1216),
          type: 'info3'
        },
        {
          position: new window.google.maps.LatLng(51.5121, 0.2516),
          type: 'info4'
        },
        {
          position: new window.google.maps.LatLng(51.4121, 0.2216),
          type: 'info5'
        },
      ]

      // Create markers.
      for (var i = 0; i < features.length; i++) {
        let marker = new window.google.maps.Marker({
          position: features[i].position,
          icon: icons[features[i].type].icon,
          map: map
        });
      };

    }

    if (!window.google) {
      let s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyBqBRGDHQGVUlJPMT6Mbi2B7CLt0qEU-B4`;
      let x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      s.addEventListener('load', e => {
        initMap()
      })
    } else {
      initMap()
    }
  }, [props.id])






  return (
    <div style={{ width: '100%', height: '100%' }} id={props.id} />
  );

}

export default Map