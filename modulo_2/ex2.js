const rodizio = (diaSemana) => {
    const rodizioPorDia = {
        0 : [1, 2],
        1 : [3, 4],
        2 : [5, 6],
        3 : [7, 8],
        4 : [9, 0],
        5 : [],
        6 : [],
    };

    return rodizioPorDia[diaSemana];
};

//console.log(rodizio(0));

let contador = 0;

while(contador <= 6) {
    if(contador > 4) {
        console.log("No dia", contador, "da semana, os veículos não tem rodízio");
    } else {
        console.log("No dia", contador, "da semana, os veículos de rodízio são:", rodizio(contador));
    };

    contador++;
};