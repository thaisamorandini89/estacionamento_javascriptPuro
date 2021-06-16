(function (){

    const $ = q => window.document.querySelector(q);

    const getGarage = () => localStorage.garage ? JSON.parse(localStorage.garage) : [];
    
    function renderGarage (){
        const garage = getGarage();
        garage.forEach(c => addCarToGarage(c));
    }

    function addCarToGarage(car) {
        const row = window.document.createElement("tr");

        row.innerHTML = `
            <td>${car.name}</td>
            <td>${car.licence}</td>
            <td>${new Date(car.time)
                      .toLocaleDateString("pt-BR", {
                          hour: "numeric",
                          minute: "numeric"
                      })}</td>
            <td>
                <button>X</button>
            </td>
        `

        $('#garage').appendChild(row);
    }

    renderGarage();
    $('#send').addEventListener("click", e => {
        const name = $('#name').value;
        const licence = $('#licence').value;

        if(!name || !licence){
            alert("Os campos são obrigatórios");
            return;
        }

        const car = {name, licence, time: new Date() }
        const garage = getGarage();
        garage.push(car);
        localStorage.garage = JSON.stringify(garage);

        $('#name').value = "";
        $('#licence').value = "";

        addCarToGarage(car);

        console.log(garage);
    })

})();