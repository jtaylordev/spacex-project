import * as React from 'react';
import { useQuery } from "@apollo/client";
import {GET_COMPANY} from "../../graphql/queries";
import { Company as CompanyType, } from "../../graphql/types";


function Home(){
    const [companyData, setCompanyData] = React.useState<any>(null)
    const {loading, error, data} = useQuery(GET_COMPANY)
    if(error){
        console.log(error.message)
    }
    if(loading){
        console.log(loading)
    }
    React.useEffect(() => {
        data && setCompanyData(data.company)
    }, [])


    return(
        <div>
            <h1>{companyData.ceo}</h1>
        </div>
    )
}

export default Home;
