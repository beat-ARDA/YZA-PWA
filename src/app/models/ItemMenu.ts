export class ItemMenu {
    public url: string;
    public nombre: string;
    public iconoSelec: string;
    public iconoNoSelec: string;

    constructor(
        private _url: string,
        private _nombre: string,
        private _iconoSelec: string,
        private _iconoNoSelec: string) {

        this.url = _url;
        this.nombre = _nombre;
        this.iconoSelec = _iconoSelec;
        this.iconoNoSelec = _iconoNoSelec;
    }
}