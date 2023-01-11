import React, { useEffect, useState } from "react";
import '../Userprofile/userprofile.scss'
import naman from '../../images/naman.jpg'
import Loading from "../Loading/loading";
import {useNavigate} from 'react-router-dom';


// Userprofile component and Parent Component
const Userprofile = ({setUserProfileData}) => {

    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
    const URL = "https://cdn.shopify.com/s/files/1/0017/3103/5196/files/ExampleQuery_1.json?v=1673248503";

    const fetchData = async () => {
        try {
            const response = await fetch(URL);
            const json = await response.json();
            console.log(json);
            setData(json);
            setUserProfileData(json)
            setLoading(false);
        } catch (error) {
            console.log("error", error);
        }
    };

    setTimeout(fetchData , 1000);
    },[]);
    
    if(loading){
        return <Loading />
    }else{
          
        return(
            <div className="bigBox">
                <div className="userprofile">
                    <div className="u1">
                        <img  src={naman} width = "200" height= "220"/>
                    </div>
                    <div className="u2">
                        <h4>First Name:<span>{(" " + data?.data?.customer?.firstName)}</span></h4>
                        <h4>Last Name:<span>{(" " + data?.data?.customer?.lastName)}</span></h4>
                        <div className="btnControl">
                            <button onClick={() => navigate('/order')} className="btn1">Orders</button>
                            <button onClick={() => navigate('/address')}  className="btn2">Address</button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
  
}

export default Userprofile;