const add = document.getElementsByClassName('addBtn');
const nComd = document.getElementsByClassName('nbrcmd');
const rem = document.getElementsByClassName('removeBtn');
const prix = document.getElementsByClassName('prixC1');
const casetotal = document.getElementsByClassName('tota');
const numcard = document.getElementsByClassName('card');
const facture = document.querySelector(".Facture");
const arrAdd = Array.from(add);
const arrnCmd =Array.from(nComd);
const arrRem = Array.from(rem);
const arrPrix = Array.from(prix);
const arrCaseTot = Array.from(casetotal);
const arrnumcard= Array.from(numcard);
for (let i = 0; i < numcard.length; i++) {
    let ind = numcard[i].getAttribute("id");
    arrAdd[ind].addEventListener('click', function () {
        arrnCmd[ind].value = Number(arrnCmd[ind].value) + 1;
        arrCaseTot[ind].value = Number(arrPrix[ind].textContent) * Number(arrnCmd[ind].value);
        var T = 0;
        for (let j = 0; j < arrnumcard.length; j++) {
            T += (Number(arrCaseTot[j].value));
        };
        facture.value = T;
    });
    arrRem[ind].addEventListener('click', function (e) {
        if (arrnCmd[ind].value > 0) {
            arrnCmd[ind].value = Number(arrnCmd[ind].value) - 1;
            arrCaseTot[ind].value = Number(arrPrix[ind].textContent) * Number(arrnCmd[ind].value);
            var T = 0;
            for (let j = 0; j < arrnumcard.length; j++) {
                T += (Number(arrCaseTot[j].value));
            };
            facture.value = T;
        }
        else {
            e.target.closest(".card").remove();
            let r = Number(e.target.closest(".card").getAttribute("id"));
            r += 1;
            alert("la carte numero " + r + " est retirer");
            for (let o = 0; o < arrnumcard.length; o++) {
                numcard[o].removeAttribute("id");
                numcard[o].setAttribute("id", o);
                console.log(numcard[o].getAttribute("id"));
            }
        }
    });
};



