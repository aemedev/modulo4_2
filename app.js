let totalPriceFunction = ()=> {
    let initialPrice = selectionRoom();
    let priceWithRoomAndPeople = howManyPeople(initialPrice);
    let priceWithRoomPeopleNigths = howManyNigths(priceWithRoomAndPeople);
    let priceRoomPeopleNigthsSpa = selectSpa(priceWithRoomPeopleNigths);
    let priceRoomPeopleNigthsSpaParking = parkingNigths(priceRoomPeopleNigthsSpa);

    return priceRoomPeopleNigthsSpaParking;
};


//////////////////////////////////////// Which Room?
let selectionRoom = () => {
    let totalNigthPrice = document.querySelector('#precio-noche-total');
    let descriptionRoom = document.querySelector('#room-description');
    let titleRoom = document.querySelector('#titleroom');
    let imgRoom = document.querySelector('#img');
    
        let value = selectRoom.options[selectRoom.selectedIndex].value;
        let initialPrice = 0;
        if (value == 3) {
            titleRoom.textContent = 'Suite';
            descriptionRoom.textContent = 'Habitación de tipo Suite, con una o dos camas';
            imgRoom.src = 'assets/suite.jpg';
            initialPrice = 150;
            totalNigthPrice.textContent = initialPrice + ('€');
        } else if(value == 2){
            titleRoom.textContent = 'Junior Suite';
            descriptionRoom.textContent = 'Habitación de tipo Junior Suite, con una o dos camas';
            imgRoom.src = 'assets/suitejr.jpg';
            initialPrice = 120;
            totalNigthPrice.textContent = initialPrice + ('€');
        } else if(value == 1){
            titleRoom.textContent = 'Standard';
            descriptionRoom.textContent = 'Habitación de tipo estándar, con una o dos camas';
            imgRoom.src = 'assets/standard.jpg';
            initialPrice = 100;
            totalNigthPrice.textContent = initialPrice + ('€');
        } else {
            titleRoom.textContent = '';
            descriptionRoom.textContent = '';
            imgRoom.src = '';
            initialPrice = 0;
            totalNigthPrice.textContent = initialPrice + ('€');
        }
        return initialPrice;

};
let selectRoom = document.querySelector('#selectionRoom');
selectRoom.addEventListener('change', totalPriceFunction);


//////////////////////////////////////// HOW MANY PEOPLE?

let howManyPeople = (a) => {
    let totalNigthPrice = document.querySelector('#precio-noche-total');
    let selectPeople = document.querySelector('#selectPeople');
    let value = selectPeople.options[selectPeople.selectedIndex].value;
    let partialPrice = a;
    let perCent = 100 * 0.25;
    let valueToReturn;
    
    if(value == 1){
        valueToReturn = partialPrice - perCent;
        totalNigthPrice.textContent = valueToReturn + ('€');
    } else if(value == 3){
        valueToReturn = parseInt(partialPrice) + parseInt(perCent);
        totalNigthPrice.textContent = valueToReturn + ('€');
    } else {
        valueToReturn = partialPrice;
        totalNigthPrice.textContent = valueToReturn + ('€');
    }
    return valueToReturn;
};

let selectPeople = document.querySelector('#selectPeople');
selectPeople.addEventListener('change', totalPriceFunction);


///////////////////////////////////////////////////CANTIDAD

let howManyNigths = (a)=> {
    let quantityNigths = document.querySelector('#quantity-nigths').value;
    let partialPrice = a;
    let totalNigthPrice = document.querySelector('#precio-noche-total');
    let valueToReturn;
    if (quantityNigths > 0) {
        let porNoche = quantityNigths * 10;
        valueToReturn = partialPrice + porNoche;
        totalNigthPrice.textContent = valueToReturn + ('€');
    } else {
        valueToReturn = partialPrice;
    }
    console.log(valueToReturn)
    return valueToReturn;
};
let quantityNigths = document.querySelector('#quantity-nigths');
quantityNigths.addEventListener('keyup', totalPriceFunction);

/////////////////////////////////////////SPA

let selectSpa = (a)=> {
    let spa = document.querySelector('#spa');
    let value = spa.options[spa.selectedIndex].value;
    let partialPrice = a;
    let valueToReturn;
    let totalNigthPrice = document.querySelector('#precio-noche-total');
    if(value == 1){
        valueToReturn = parseInt(partialPrice) + 20;
        totalNigthPrice.textContent = valueToReturn + ('€');
    }else if(value == 2){
        valueToReturn = partialPrice;
    }
    console.log(valueToReturn)
    return valueToReturn;
    
};
let spa = document.querySelector('#spa');
spa.addEventListener('change', totalPriceFunction)

///////////////////////////////////////////////////NOOCHES PARKING

let parkingNigths = (a)=>{
    let parkingInput = document.querySelector('#parking').value;
    let totalNigthPrice = document.querySelector('#precio-noche-total');
    let partialPrice = a;
    let valueToReturn;

    if (parkingInput > 0) {
        let porNoche = parkingInput * 10;
        valueToReturn = partialPrice + porNoche;
        totalNigthPrice.textContent = valueToReturn + ('€');
    } else {
        valueToReturn = partialPrice;
    }
    console.log(valueToReturn)
    return valueToReturn;
};
let parkingInput = document.querySelector('#parking')
parkingInput.addEventListener('keyup', totalPriceFunction);

totalPriceFunction();