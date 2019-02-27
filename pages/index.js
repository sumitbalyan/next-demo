import fetch from 'isomorphic-unfetch'

import Layout from "../components/Layout";
import Prices from '../components/Prices'

const Index= (props)=>(
    <Layout>
        <div>
            <h3>Welcome TrexBiz</h3>
            <p>Check current Bitcoin rate</p>
            <Prices bpi={props.bpi} />
        </div>
    </Layout>
    
)

Index.getInitialProps= async function(){
    console.log('getInitialProps')
    const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    const data=await res.json();
    console.log('data',data)
    return {
        bpi : data.bpi
    }
}

export default Index;