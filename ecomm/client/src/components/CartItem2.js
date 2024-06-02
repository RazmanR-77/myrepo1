// CartItem2.js 

// old code 
// use dummy cart data only  
 

let product = {
    image: "imageSrc11",
    name: "Raspberry Pi 3 Model B Motherboard ",
    description: "description11",
    quantity: 1,
    price: 38.50
};


function CartItem2(props) {


    // just test data

    
 
    

    return (
        <>
            <row>
                <div className="media">
                    <div className="media-body">
                        <img src={"PiImg"} className="img-fluid mr-3" alt="raspberry pi" />
                        {product.image}  todo change this

                    </div>
                    <h5 className="mt-0">{product.name}</h5>
                </div>
                <div className="media-count">
                    <p>
                        {product.quantity}
                    </p>
                </div>
                <div className="container-fluid">
                    <h6>
                        {product.price}
                    </h6>
                    {"props.cart.product.price"}
                </div>
            </row>
        </>
    );

}

export default CartItem2;

export function getProduct(){
   return product;
}