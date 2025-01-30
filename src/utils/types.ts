export type SystemProps = {
    id:number,
    kw:number,
    putereSistem: string,
    stocare: string,
    pret: string,
    numarPanouri: number,
    innerPrice: number
}

export type PanelProps = {
    Name: string,
    PowerW: number,
    Price: number
}

export type InverterProps = {
    Name:string,
    PowerKw:number,
    Current: UtilityConnectionType,
    Price: number
}

export type BatteryProps = {
    Name:string,
    PowerKw:number,
    Price: number
}

export type SystemOrientationProps = {
    East: boolean,
    South: boolean,
    West: boolean
}

export enum UtilityConnectionType {
    SinglePhase = "Single-phase",
    ThreePhase = "Three-phase",
    HybridSinglePhase = "Hybrid-Single-Phase",
    HybridThreePhase = "Hybrid-Three-Phase"
}

export enum ClientTypeProps {
    Individual = "Individual",
    Company = "Company"
}

export type SystemRequestProps = {
    ClientType:string,
    System: SystemProps,
    Installment: MountingStructureProps,
    Orientation: SystemOrientationProps,
    SolarPanels: PanelProps,
    UtilityConnection: UtilityConnectionType,
    Inverter : InverterProps,
    Batteries: BatteryProps,
    Warranty: number
}

export enum SystemTypeProps {
    SinglePhased = "SinglePhased",
    TriplePhased = "TriplePhased"
}

export enum MountingStructureProps {
    RoofTile = "Roof Tile",
    MetalRoofing = "Metal Roofing",
    Ground = "Ground"
}