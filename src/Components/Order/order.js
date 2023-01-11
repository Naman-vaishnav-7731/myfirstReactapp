import React from "react";
import '../Order/order.scss'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Order = ({userProfileData}) =>{

    const navigate = useNavigate();

    return(
        <div>
        <table>
           <tr>
                <th>Order Number</th>
                <th>Shipping Address</th>
                <th>Email</th>
                <th>Financial Status</th>
                <th>Process At</th>
                <th>Order Items</th>
           </tr>
                {
                    userProfileData.data.customer.orders.nodes.map((key , val) =>{
                        console.log(userProfileData.data.customer.orders.nodes)
                        return(
                            <tr>
                            <td>{key.orderNumber}</td>
                            <td>{key.shippingAddress.address1}</td>
                            <td>{key.email}</td>
                            <td>{key.financialStatus}</td>
                            <td>{key.processedAt}</td>
                            <td><button onClick={() => navigate(`/lineitems/${key.orderNumber}`)}>click</button></td>
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

export default Order;