function getSensorData() {

    let sensor = document.querySelector('input[name="sensor"]:checked').value;

    if(sensor == 'VEML7700') {
        let labels = ['Timestamp', 'GPS', 'Lux', 'White']; 
        fetch('https://prenasal-cuttlefish-3039.dataplicity.io/sensors/VEML7700').then(res => {
            console.log(res)
        })
        createTable(labels, document.getElementById('table-container'));

    } else if(sensor == 'TCS34725') {
        let labels = ['Timestamp', 'GPS', 'Red', 'Green', 'Blue', 'Clear', 'Temp. Color'];
        fetch('https://prenasal-cuttlefish-3039.dataplicity.io/sensors/TCS34725').then(res => {
            console.log(res)
        })
       createTable(labels, document.getElementById('table-container'));
    } else {
        let labels = ['Timestamp', 'GPS', 'Temp.', 'Press.', 'Hum'];
        fetch('https://prenasal-cuttlefish-3039.dataplicity.io/sensors/BME680').then(res => {
            console.log(res)
        })
       createTable(labels, document.getElementById('table-container'));
    }
    
}

function createTable(labels, container) {

    let tableExist = document.getElementById('my-table');
    if(tableExist) tableExist.remove();
;
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    
    table.classList.add("table");
    table.setAttribute('id', 'my-table')

    var theadTr = document.createElement('tr');
    for (var i = 0; i < labels.length; i++) {
        var theadTh = document.createElement('th');
        theadTh.innerHTML = labels[i];
        theadTr.appendChild(theadTh);
    }
    thead.appendChild(theadTr);
    table.appendChild(thead);

    container.appendChild(table);

}