import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";

const builder : SanduicheBuilder = new SanduicheBuilder;
const director : Director = new Director(builder);

director.constructHotDog();
const hotdog : Sanduiche = builder.getSanduiche();
console.log("Criando Lanche: " + hotdog.sanduicheType);
console.log("Proteina: " + hotdog.protein);
console.log("Salada: " + hotdog.salad);
console.log("Tipo pao: " + hotdog.bread);
console.log("Quantidade de molhos: " + hotdog.sauce.length);


director.constructXSalada();
const XSalada : Sanduiche = builder.getSanduiche();
console.log("Criando Lanche: " + XSalada.sanduicheType);
console.log("Proteina: " + XSalada.protein);
console.log("Salada: " + XSalada.salad);
console.log("Tipo pao: " + XSalada.bread);
console.log("Quantidade de molhos: " + XSalada.sauce.length);