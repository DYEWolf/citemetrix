function getSensorData() {

    let sensor = document.querySelector('input[name="sensor"]:checked').value;

    if(sensor == 'VEML7700') {

        let labels = ['timeStamp', 'GPS', 'Lux', 'White']; 
        let data = [
            {
                timeStamp: "11",
                gps: '11',
                lux: "11",
                white: "11"
            },
        ]
        fetch('https://prenasal-cuttlefish-3039.dataplicity.io/sensors/VEML7700').then(res => {
            console.log(res)
            return res
        }).then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err)
        });
        createTable(labels, document.getElementById('table-container'), data);

    } else if(sensor == 'TCS34725') {
        let labels = ['timeStamp', 'GPS', 'Red', 'Green', 'Blue', 'Clear', 'tempColor'];
        let data = [
            {
                timeStamp: "11",
                gps: '11',
                red: "11",
                green: "11",
                blue: "11",
                clear: "11",
                tempColor: "11"
            },
        ]
        fetch('https://prenasal-cuttlefish-3039.dataplicity.io/sensors/TCS34725').then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        });
       createTable(labels, document.getElementById('table-container'), data);
    } else {
        let labels = ['timeStamp', 'GPS', 'Temp', 'Press', 'Hum'];
        let data = [
            {
                timeStamp: "11",
                gps: '11',
                temp: "11",
                press: "11",
                hum: "11"
            },
        ]
        fetch('https://prenasal-cuttlefish-3039.dataplicity.io/sensors/BME680').then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        });
       createTable(labels, document.getElementById('table-container'), data);
    }
    
}

function createTable(labels, container, data) {

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

    for (j = 0; j < data.length; j++) {
        var tbodyTr = document.createElement('tr');
        for (k = 0; k < labels.length; k++) {
          var tbodyTd = document.createElement('td');
          tbodyTd.innerHTML = data[j][labels[k].toLowerCase()];
          tbodyTr.appendChild(tbodyTd);
        }
        tbody.appendChild(tbodyTr);
      }
      table.appendChild(tbody);

    container.appendChild(table);

}