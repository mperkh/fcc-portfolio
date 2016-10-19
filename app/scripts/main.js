var sections = [
  'quotemachine',
  'localweather',
  'calculator',
  'simon',
  'tictactoe',
];

sections.forEach(function(item){
  $('#' + item).geopattern(item);
});

