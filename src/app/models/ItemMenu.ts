export class ItemMenu {
    public activado: boolean;
    public nombre: string;
    public iconoSelec: string;
    public iconoNoSelec: string;

    constructor(
        private _activado: boolean,
        private _nombre: string,
        private _iconoSelec: string,
        private _iconoNoSelec: string) {

        this.activado = _activado;
        this.nombre = _nombre;
        this.iconoSelec = _iconoSelec;
        this.iconoNoSelec = _iconoNoSelec;
    }
}