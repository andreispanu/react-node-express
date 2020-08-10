import React, { useEffect } from 'react';

const Map = (props) => {



  useEffect(() => {

    const onScriptLoad = () => {
      // Custom Silver Map
      var styledMapType = new window.google.maps.StyledMapType(
        require('./MapStyles.json')
      )
      const map = new window.google.maps.Map(
        document.getElementById(props.id),
        {
          center: { lat: 51.5074, lng: 0.1278 },
          zoom: 11,
          disableDefaultUI: true,
          zoomControl: true
        }
      );
      map.mapTypes.set('styled_map', styledMapType);
      map.setMapTypeId('styled_map');
    }

    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyBqBRGDHQGVUlJPMT6Mbi2B7CLt0qEU-B4`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      s.addEventListener('load', e => {
        onScriptLoad()
      })
    } else {
      onScriptLoad()
    }
  }, [props.id])






  return (
    <div style={{ width: '100%', height: '100%' }} id={props.id} />
  );

}

export default Map