export class Factura {
    constructor(
        public _id: string,
        public total: number,
        public fecha: Date,
        public supermercado: string,
        public tipo: string
    ) {}
}
