function randomJSONGen(){
    let orderState =['Created','Shipped','Delivered','Canceled'];
    let orderType =['cake','cookies','muffies'];
    let randomOrderState =Math.floor(Math.random()*orderState.length);
    let randomOrderType= Math.floor(Math.random()*orderType.length);
    return Array(100).fill({
        customerID:Math.floor(Math.random() * 100),
        orderType:orderType[randomOrderType],
        quantity:Math.floor(Math.random()*5),
        orderState:orderState[randomOrderState],
        lastUpdatedDate:Math.floor(Math.random()*Date.now()),
        branch:Math.floor(Math.random() * 1000),     
    }); 
   
};


