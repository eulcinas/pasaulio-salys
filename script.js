/* ANTRA UŽDUOTIS
Pasirinkite 5 pasaulio šalis. Suraskite (Google, Wikipedia) jų valstybės plotą (km²) ir gyventojų skaičių.

Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius.

Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.

Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for loop arba for/of loop pagal tokį šabloną:

Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².

Papildomai
Sudėkite sukoduotą skaičiavimą ir spausdinimą į funkcijos ciklą ir jį paleiskite per for loop arba for/of loop nurodydami informaciją iš masyvo. */

"use strict"

var countries = [
    {name: "New Zealand", area: 268021, population: 5133060},
    {name: "Germany", area: 357022, population: 83190556},
    {name: "Luxembourg", area: 2586.4, population: 645397},
    {name: "Hawaii", area: 28311, population: 1455271},
    {name: "Greenland", area: 2166086, population: 56081}    
];

for(var def of countries){
    print(def.name, def.area, def.population)
}

function print(name, area, population){
    console.log(`Šalis: ${def.name}, joje gyvena ${(Number(def.population) / 1000000).toFixed(2)} mln. gyventojų.`)
    console.log(`Valstybės plotas: ${def.area} km², plotas tenkantis vienam gyventojui: ${(Number(def.area) * 1000000 / Number(def.population)).toFixed(2)} m².`)
    console.log("=======")
}