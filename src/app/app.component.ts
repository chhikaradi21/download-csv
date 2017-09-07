import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    selectedField = 'name';
    dataArr = [
        {
            name: 'Aditya',
            city: 'Mumbai',
            mobile: '1234567899',
            age: 10
        },
        {
            name: 'Vikas',
            city: 'Hisar',
            mobile: '2123456789',
            age: 50
        },
        {
            name: 'Rishi',
            city: 'Banglore',
            mobile: '3123456789',
            age: 30
        }
    ];

    downloadCSV(arrayOfObjects, name) {
        const scope = this;
        const link = document.createElement('a');
        let encodedUri = '';
        let csvContent = 'data:text/csv;charset=utf-8,';

        let objectToCSVRow = function (dataObject) {
            var dataArray = [];
            for (var o in dataObject) {
                if (dataObject.hasOwnProperty(o)) {
                    var innerValue = !dataObject[o] ? '' : dataObject[o].toString();
                    var result = innerValue.replace(/"/g, '""');
                    result = '"' + result + '"';
                    dataArray.push(result);
                }
            }
            return dataArray.join(',') + '\r\n';
        };

        // headers
        csvContent += objectToCSVRow(Object.keys(arrayOfObjects[0]));

        arrayOfObjects.forEach(function (item) {
            csvContent += objectToCSVRow(item);
        });

        encodedUri = encodeURI(csvContent);
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', name);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

}
