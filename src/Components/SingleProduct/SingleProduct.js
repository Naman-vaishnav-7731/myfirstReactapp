import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../SingleProduct/singleproduct.scss"

const SingleProduct = ({userProfileData}) => {
    const navigate = useNavigate()
    const {index} = useParams();
    const {orderNumber} = useParams();
    var allProducts = userProfileData.data.customer.orders.nodes;
    var data = allProducts.filter((allProducts)=>(+orderNumber === allProducts.orderNumber));
    // console.log(data.length);
    let products;
    if(data.length > 0){
        products = data[0].lineItems.nodes[index];
    }
    return(
        <div className="bigBox">
            <div className="userprofile">
                <div className="u1">
                    <img  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" width="180" height="130" />
                </div>
                <div className="u2">
                    <h4>{products.title}</h4>
                    <h4>quantity{" " + products.quantity}</h4>
                    <h4>Amount{" " + products.originalTotalPrice.amount}</h4>
                    <button className="backbtn" onClick={() =>navigate(`/lineitems/${orderNumber}`)}><span>Click me😊</span><span>Back🔙</span></button>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
