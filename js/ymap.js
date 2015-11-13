ymaps.ready(init);
var myMap;
function init() {
  myMap = new ymaps.Map('map', {
    center: [59.938554257894,30.322479499999993],
    zoom: [16],
    controls: []
  }),
  myMap.behaviors.disable('scrollZoom');
  myMap.controls.add('zoomControl');
  
          
myPlacemark = new ymaps.Placemark([59.938554257894,30.322479499999993], {
      hintContent: 'г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8',
  }, {
      preset: 'islands#redDotIcon'
  });

  myMap.geoObjects.add(myPlacemark);
}

