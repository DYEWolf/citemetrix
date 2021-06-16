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




let getInfo = async() => {

    let tableBody = document.getElementById('table-data');

    let requestData = await fetch('https://randomuser.me/api/?results=10').catch(err => {
        console.log(err);
    });
    let data = await requestData.json();

    for( i = 0; i < data.length; i++) {

        let tableRow = document.createElement('tr');
        let tableCellEmail = document.createElement('td');
        let tableCellGender = document.createElement('td');
        let tableCellPhone = document.createElement('td');

        tableCellEmail.innerHTML = data[i].email;
        tableCellGender.innerHTML = data[i].gender;
        tableCellPhone.innerHTML = data[i].phone;

        console.log(data[i].email)

        tableRow.appendChild(tableCellEmail);
        tableRow.appendChild(tableCellGender);
        tableRow.appendChild(tableCellPhone);

        tableBody.appendChild(tableRow);  

    }

    console.log(data.results);

}
