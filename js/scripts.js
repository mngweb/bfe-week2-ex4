/*
4. Prywatność za pomocą domknięcia
Dokończ pisanie przygotowanego pod adresem http://pastebin.com/aNKyCt3N kodu tak,
aby nie generował błędów. Stwórz metody get oraz set nie korzystając z prototypów. Istotą
działania funkcji createData jest zwrócenie obiektu, który zawierał będzie metody get oraz
set. Metoda get powinna przyjmować klucz, np. “name” oraz zwracać wartość np.
data[“name”], natomiast metoda set powinna przyjmować klucz i wartość, sprawdzać czy
oba te parametry zostały podane, a następnie powinna ustawiać np. data[“name”] =
“Janek”.
*/


/*PYTANIE 1: Jak tworzymy obiekt z metodami, to czy jest różnica między umieszczeniem definicji funkcji:
WERSJA 1) w return {nazwafunkcji: function(){}}; 
WERSJA 2) lub jako this.nazwa_funkcji = function(){}; - jeśli dodatkowo dodamy aby funkcja wywyoływała się z new nawet gdy tego new nie podamy czyli if(!(this instanceof Obiekt)){return new Obiekt()} ?
Który z tych sposobów kiedy może być lepszy?
*/


//WERSJA 1:

function createData(obj) {

    var data = obj;

    return{ 
        set: function(key, val){
            if(key && val){
                data[key] = val;
            }
            else{
                throw new Error("Podaj właściwe parametry");
            }
        },
        get: function(key){
            if(data[key] !== undefined){
                return data[key];
            }
            else{
                throw new Error("Taka właściwość nie istnieje");
            }

        }
    }

}



// // WERSJA 2:

// function createData(obj) {

//     if(!(this instanceof createData)){ 
//         return new createData(obj);
//     }

//     var data = obj;
    
//     this.set = function(key, val){
//             if(key && val){
//                 data[key] = val;
//             }
//             else{
//                 throw new Error("Podaj właściwe parametry");
//             }
//     }

//     this.get = function(key){
//             return data[key];
//     }

// }



var data = createData({});

data.set("name", "Janek");

console.log( data.get("name") );

