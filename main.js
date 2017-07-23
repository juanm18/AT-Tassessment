
var table_data = [
{ first_name : 'Rose',
last_name  : 'Tyler',
home       : 'Earth' },
{ first_name : 'Zoe',
last_name  : 'Heriot',
home       : 'Space Station W3'},
{ first_name : 'Jo',
last_name  : 'Grant',
home       : 'Earth'},
{ first_name : 'Leela',
last_name  : null,
home       : 'Unspecified'},
{ first_name : 'Romana',
last_name  : null,
home       : 'Gallifrey'},
{ first_name : 'Clara',
last_name  : 'Oswald',
home       : 'Earth'},
{ first_name : 'Adric',
last_name  : null,
home       : 'Alzarius'},
{ first_name : 'Susan',
last_name  : 'Foreman',
home       : 'Gallifrey'} ];

function fillTable(people) {
  var table = document.getElementById('table')
  for (var i = 0; i < people.length; i++){
    var person = people[i];
    var table_row = document.createElement('tr')
    var dict = ['first_name', 'last_name', 'home'];

    for (var j=0; j< dict.length; j++){
      var table_column = document.createElement('td');
      table_column.innerHTML = person[dict[j]];
      if ( person[dict[j]] === null || person[dict[j]]=== 'Unspecified'){
        table_column.innerHTML = 'N/A'
      };
      row.appendChild(column);
    };
    table.appendChild(row)
  };
};
fillTable(table_data);
