function initMap(id,markers){
  const map=L.map(id,{center:[23.8859,45.0792],zoom:5});
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OSM'}).addTo(map);
  const g=L.layerGroup().addTo(map);
  (markers||[]).forEach(m=>L.marker([m.lat,m.lng]).addTo(g).bindPopup(m.name||''));
  return map;
}