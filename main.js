fetch('https://randomuser.me/api/?results=10').then(response => {
    return response.json();
}).then(data => {
    console.log(data.results);

    
    let dataRes = data.results;

    let tableBody = document.getElementById('table-data');


    for( i = 0; i < 6; i++) {

        // 

        let tableRow = document.createElement('tr');
        let tableCellEmail = document.createElement('td');
        let tableCellGender = document.createElement('td');
        let tableCellPhone = document.createElement('td');

        tableCellEmail.innerHTML = dataRes[i].email;
        tableCellGender.innerHTML = dataRes[i].gender;
        tableCellPhone.innerHTML = dataRes[i].phone;

        tableRow.appendChild(tableCellEmail);
        tableRow.appendChild(tableCellGender);
        tableRow.appendChild(tableCellPhone);

        tableBody.appendChild(tableRow);  

    }


}).catch(err => {
    console.log(err);
});


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
       createTable(labels, document.getElementById('table-container'));
    } else {
        let labels = ['Timestamp', 'GPS', 'Temp.', 'Press.', 'Hum'];
       createTable(labels, document.getElementById('table-container'));
    }
    
    console.log(sensor)
    for(i = 0; i < sensor.length; i++) {
        if(sensor[i].checked)  {
            console.log(sensor);
        }    
       
    }
}

function createTable(labels, container) {

    let tableExist = document.getElementById('my-table');
    if(tableExist) tableExist.remove();
    console.log(tableExist)
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