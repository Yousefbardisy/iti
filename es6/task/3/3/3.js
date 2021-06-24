function buildTable(apiData) {
    var td = document.getElementsByTagName('tbody')[0];

    apiData.forEach(element => {
        var row = `<tr>
                        <td>${element.first_name}</td>
                        <td>${element.last_name}</td>
                        <td>${element.email}</td>
                        <td><img src='${element.avatar}' class='img-fluid'/></td>

                  </tr>`
        td.innerHTML += row;

    });
}

function getUsersData(url) {
    new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(this.responseText);
                } else {
                    reject('error in api!')
                }
            }
        }
        xhr.open('GET', url)
        xhr.send();
    }).then((usersObj) => {
        let usersData = JSON.parse(usersObj).data;
        buildTable(usersData);
    }).catch(console.log("error"));
}

reqUrl = 'https://reqres.in/api/users';
getUsersData(reqUrl);