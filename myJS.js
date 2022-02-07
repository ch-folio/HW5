let vacayArray = [];


// define a constructor to create vacation objects
let VacationObject = function (pCity, pState, pCountry, pType) {
    this.City = pCity;
    this.State = pState;
    this.Country = pCountry;
    this.ID = vacayArray.length +1;
    this.Type = pType;
}

vacayArray.push(new VacationObject("Seattle", "Washington", "USA",));
vacayArray.push(new VacationObject("London", "England", "UK",));
vacayArray.push(new VacationObject("Sedona", "Arizona", "USA",));
vacayArray.push(new VacationObject("Toronto", "Ontario", "Canada",));

let selectedType = "not selected";

document.addEventListener("DOMContentLoaded", function () {

    createList();

    document.getElementById("buttonAdd").addEventListener("click", function () {

        vacayArray.push(new VacationObject(document.getElementById("city").value, document.getElementById("state").value, document.getElementById("country").value, selectedType));
        document.location.href = "index.html#ListAll";

    });
        
        document.getElementById("buttonClear").addEventListener("click", function () {
            document.getElementById("city").value = "";
            document.getElementById("state").value = "";
            document.getElementById("country").value = "";
        });

        $(document).bind("change", "#select-type", function (event, ui) {
            selectedType = $('#select-type').val();
        });

        document.getElementById("buttonSortCity").addEventListener("click", function () {
            vacayArray.sort(dynamicSort("City"));
            createList();
            document.location.href = "index.html#ListAll";

        });

        document.getElementById("buttonSortState").addEventListener("click", function () {
            vacayArray.sort(dynamicSort("State"));
            createList();
            document.location.href = "index.html#ListAll";

        });

        document.getElementById("buttonSortCountry").addEventListener("click", function () {
            vacayArray.sort(dynamicSort("Country"));
            createList();
            document.location.href = "index.html#ListAll";

        });

        $(document).on("pagebeforeshow", "#ListAll", function (event) {
            createList();
        });

    });

    function createList() {
        var theList = document.getElementById("myul");
        theList.innerHTML = "";

        vacayArray.forEach(function (element,) {
            var li = document.createElement('li');
            li.innerHTML = element.ID + ":  " + element.City + "  " + element.State + "  " + element.Country + element.Type;
            theList.appendChild(li);
        });
    };
        

    function dynamicSort(property) {
        var sortOrder = 1;

        if (property[0] === "-") {
            sortOrder = -1;
            property.property.substr(1);
        }

            return function (a, b) {
                if (sortOrder == -1) {
                    return b[property].localeCompare(a[property]);
                } else {
                    return a[property].localeCompare(b[property]);
                }
            }
        }
    