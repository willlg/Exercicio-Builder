import IBuilder from "../builders/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Director{
    constructor(private builder: IBuilder){}

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setBread(Bread.PAOHOTDOG);
        this.builder.setSalad(Salad.SEM);
        this.builder.addSauces(new Sauce(3));
        this.builder.setProtein(Protein.VINA);
    }

    constructXSalada(){
        this.builder.setSanduicheType(SanduicheType.HAMBURGUER);
        this.builder.setBread(Bread.PAOHAMBURGUER);
        this.builder.setSalad(Salad.ALFACE);
        this.builder.addSauces(new Sauce(6));
        this.builder.addSauces(new Sauce(6));
        this.builder.addSauces(new Sauce(6));
        this.builder.addSauces(new Sauce(6));
        this.builder.setProtein(Protein.BOVINA);
    }
}