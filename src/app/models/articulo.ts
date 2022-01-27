export interface IArticulo {
    id: string,
    codigoArticulo: string,
    nombreArticulo: string, 
    soiArticulo: boolean, 

    primerPeriodoComportamientoUnidades: number,
    primerPeriodoComportamientoVenta: number,
    primerPeriodoComportamientoContribucion: number, 
    primerPeriodoComportamientoMargen: number, 
    segundoPeriodoComportamientoUnidades: number, 
    segundoPeriodoComportamientoVenta: number, 
    segundoPeriodoComportamientoContribucion: number, 
    segundoPeriodoComportamientoMargen: number, 

    primerPeriodoPorcentajeUnidades: number, 
    primerPeriodoPorcentajeVenta: number, 
    segundoPeriodoPorcentajeUnidades: number, 
    segundoPeriodoPorcentajeVenta: number, 

    variacionMonedaUnidades: number, 
    variacionMonedaVenta: number, 
    variacionMonedaContribucion: number, 
    
    variacionPorcentajeUnidades: number, 
    variacionPorcentajeVenta: number, 
    variacionPorcentajeContribucion: number, 
    variacionPorcentajeMargen: number
}