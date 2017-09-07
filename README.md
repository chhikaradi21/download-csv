# Angularjs 4 Download CSV
This is a demo in AngularJS 4 to download table data as CSV. This code is generic so this can be used in other javascript code or frameworks.
And this can be easily impleted as AngularJS 4 Service or component. For simplicity I just put download CSV login in my main component.ts file.

### Features
1. This can be used to download table data as CSV.
2. This code is generic, so this can also be used to download data from any HTML components, you just have to pass data as an array of objects.
3. Name of CSV can be passed dynamically.

### How it works?
This is the function containing main logic
```
downloadCSV(arrayOfObjects, name) {
    const scope = this;
    const link = document.createElement('a');
    let encodedUri = '';
    let csvContent = 'data:text/csv;charset=utf-8,';

    let objectToCSVRow  = function(dataObject) {
      var dataArray = [];
      for (var o in dataObject) {
        if(dataObject.hasOwnProperty(o)) {
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

    arrayOfObjects.forEach(function(item){
      csvContent += objectToCSVRow(item);
    });

    encodedUri = encodeURI(csvContent);
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', name);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
```
It just take two arguments
1. arrayOfObjects
```
[
    {
      name : 'Aditya',
      city : 'Mumbai',
      mobile : '1234567899',
      age : 10
    },
    {
      name : 'Vikas',
      city : 'Hisar',
      mobile : '2123456789',
      age : 50
    },
    {
      name : 'Rishi',
      city : 'Banglore',
      mobile : '3123456789',
      age : 30
    }
  ];
```
2. Name - Its the name of CSV file.

### How to run on local
Follow these steps
1. git clone git@github.com:chhikaradi21/download-csv.git
2. cd download-csv
3. npm install(using node version 6)
4. ng serve
5. Access in browser at port 4200 (localhost:4200)

### Working Demo
<a href="http://adityachhikara.me/github-demos?block=download-csv" target="_blank">See Download CSV Demo</a>


## Further help
1. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.
2. Node version 6
