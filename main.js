function getSensorData() {

    let sensor = document.querySelector('input[name="sensor"]:checked').value;

    if(sensor == 'VEML7700') {

        let labels = ['Timestamp', 'GPS', 'lux', 'white']; 

        fetch('https://prenasal-cuttlefish-3039.dataplicity.io/sensors/VEML7700').then(res => {
            return res.text();
        }).then(responseData => {
            let data = JSON.parse(responseData);
            createTable(labels, document.getElementById('table-container'), data);   
        });
       

    } else if(sensor == 'TCS34725') {
        let labels = ['Timestamp', 'GPS', 'blue', 'clear', 'green', 'red', 'tempColor'];
        fetch('https://prenasal-cuttlefish-3039.dataplicity.io/sensors/TCS34725').then(res => {
            return res.text();
        }).then(responseData => {
            let data = JSON.parse(responseData);
            createTable(labels, document.getElementById('table-container'), data);   
        });
       
    } else {
        let labels = ['Timestamp', 'GPS', 'presion', 'temperatura'];
        fetch('https://prenasal-cuttlefish-3039.dataplicity.io/sensors/BME680').then(res => {
            return res.text();
        }).then(responseData => {
            let data = JSON.parse(responseData);
            createTable(labels, document.getElementById('table-container'), data);   
        });
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

    let theadTr = document.createElement('tr');
    for (let i = 0; i < labels.length; i++) {
        let theadTh = document.createElement('th');
        theadTh.innerHTML = labels[i];
        theadTr.appendChild(theadTh);
    }
    thead.appendChild(theadTr);
    table.appendChild(thead);

    for (let j = 0; j < data.length; j++) {
        let tbodyTr = document.createElement('tr');
        for (let k = 0; k < labels.length; k++) {
          let tbodyTd = document.createElement('td');
          tbodyTd.innerHTML = data[j][labels[k]];
          tbodyTr.appendChild(tbodyTd);
        }
        tbody.appendChild(tbodyTr);
      }
      table.appendChild(tbody);

    container.appendChild(table);

}

