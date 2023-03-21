let mydiv = document.getElementById('mydiv');

let add = document.getElementById('add');
let weight = document.getElementById('weight');
let date = document.getElementById('date');

add.addEventListener('click', addWeight);

x = [];
y = [];

function addWeight(){

    x.push(date.value);
    y.push(weight.value);
    console.log(x,y);

    let trace1 = {
        x,
        y,
        type: 'scatter'
    };
    
    let data = [trace1];
    Plotly.newPlot('mydiv', data);

    localStorage = null;
}