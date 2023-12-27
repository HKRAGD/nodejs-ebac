const listaCarros = [
    {
        modelo: "Gol",
        ano: 2021,
        placa: "LSN4I49",
    },
    {
        modelo: "Uno",
        ano: 2013,
        placa: "FBR2A23",
    },
    {
        modelo: "Palio",
        ano: 2016,
        placa: "PLR3D97",
    },
    {
        modelo: "Siena",
        ano: 2018,
        placa: "PXL9D49",
    },
];

//console.log(listaCarros);

const carroNovo = {
    modelo: "t-cross",
    ano: 2022,
    placa: "DFC3R43",
};

listaCarros.push(carroNovo);

//console.log(listaCarros);

listaCarros.sort((carro1, carro2) => {
    return carro1.modelo.localeCompare(carro2.modelo );
});

console.log(listaCarros);