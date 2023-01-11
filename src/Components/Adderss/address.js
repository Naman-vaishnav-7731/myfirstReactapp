import React from "react";
import { useNavigate } from "react-router-dom";

const Address = ({userProfileData}) =>{
    let navigate = useNavigate();
    let sNo = 0;
    return(
        <div>
        <table>
           <tr>
                <th>S.No</th>
                <th>Shipping Address</th>
                <th>City</th>
                <th>Country</th>
                <th>zip</th>
           </tr>
                {
                    userProfileData.data.customer.orders.nodes.map((key , val) =>{
                        console.log(userProfileData.data.customer.orders.nodes)
                        sNo++;
                        return(
                            <tr>
                            <td>{sNo}</td>
                            <td>{key.shippingAddress.address1}</td>
                            <td>{key.shippingAddress.city}</td>
                            <td>{key.shippingAddress.country}</td>
                            <td>{key.shippingAddress.zip}</td>
                      </tr>
                         
                        )
                    } )
                    
           }
        </table>
        <div className="backbtn">
            <button rel = "back" onClick={() => navigate('/')}>Back</button>
        </div>
        </div>
    )
}

export default Address;
