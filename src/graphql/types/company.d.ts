export type CompanyData = {
    ceo: string;
    coo: string;
    cto: string;
    cto_propulsion: string;
    employees: number;
    founded: number;
    founder: string;
    headquarters: object;
    launch_sites: number;
    name: string;
    summary: string;
    valuation: number;
    vehicles: number;
}

export type Company = {
    company: CompanyData;
}

type HeadQuarters = {
    address: string;
    city: string;
    state: string;
}
