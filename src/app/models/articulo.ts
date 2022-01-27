export interface IArticulo {
    Id: string,
    CodigoArticulo: string,
    NombreArticulo: string, 
    SoiArticulo: boolean, 

    PrimerPeriodoComportamientoUnidades: number,
    PrimerPeriodoComportamientoVenta: number,
    PrimerPeriodoComportamientoContribucion: number, 
    PrimerPeriodoComportamientoMargen: number, 
    SegundoPeriodoComportamientoUnidades: number, 
    SegundoPeriodoComportamientoVenta: number, 
    SegundoPeriodoComportamientoContribucion: number, 
    SegundoPeriodoComportamientoMargen: number, 

    PrimerPeriodoPorcentajeUnidades: number, 
    PrimerPeriodoPorcentajeVenta: number, 
    SegundoPeriodoPorcentajeUnidades: number, 
    SegundoPeriodoPorcentajeVenta: number, 

    VariacionMonedaUnidades: number, 
    VariacionMonedaVenta: number, 
    VariacionMonedaContribucion: number, 
    VariacionPorcentajeUnidades: number, 
    VariacionPorcentajeVenta: number, 
    VariacionPorcentajeContribucion: number, 
    VariacionPorcentajeMargen: number
}