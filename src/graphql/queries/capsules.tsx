import { gql, useQuery } from "@apollo/client";

const GET_CAPSULES = gql`
    query getCapsules {
        capsules(limit: 10) {
            dragon {
                active
                crew_capacity
                description
            }
        }
    }

`

const useGetCapsules = () => useQuery(GET_CAPSULES);

export { GET_CAPSULES, useGetCapsules }
