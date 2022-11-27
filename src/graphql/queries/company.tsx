import { gql } from '@apollo/client';

const GET_COMPANY = gql`
    query {
        company {
            ceo
            coo
            cto
            cto_propulsion
            employees
            founded
            founder
            headquarters {
                address
                city
                state
            }
            launch_sites
            name
            summary
            valuation
            vehicles
        }
    }
`
export { GET_COMPANY }
