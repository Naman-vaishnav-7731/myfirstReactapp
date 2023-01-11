import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../lineItems/lineitems.scss"

const Lineitems = ({userProfileData}) => {
    const navigate = useNavigate()

    const {orderNumber} = useParams();
    var allProducts = userProfileData.data.customer.orders.nodes;
    var data = allProducts.filter((allProducts)=>(+orderNumber === allProducts.orderNumber));
    // console.log(data.length);
    let products;
    if(data.length > 0){
        products = data[0].lineItems.nodes;
    }
    return(
        <div>
        <table>
           <tr>
                <th>Product title</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Show Details</th>
                <th></th>
           </tr>
                {
                    products.map((key , index) =>{
                        console.log(userProfileData.data.customer.orders.nodes)
                        return(
                            <tr key={index}>
                            <td>{key.title}</td>
                            <td>{key.quantity}</td>
                            <td>{key.originalTotalPrice.amount}</td>
                            <td><button onClick={() => navigate(`/lineitems/${orderNumber}/${index}`)}>click</button></td>
                      </tr>
                        )
                    } )
           }
        </table>
        <div className="backbtn">
            <button rel = "back" onClick={() => navigate('/order')}>Back</button>
        </div>
        </div>
    );
}

export default Lineitems;