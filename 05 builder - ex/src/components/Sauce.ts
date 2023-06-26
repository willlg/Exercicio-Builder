export default class Sauce{
    constructor(private _qtd){}

    get qtd() : number{
        return this._qtd;
    }

    set qtd(qtd: number){
        this._qtd = qtd;
    }
}