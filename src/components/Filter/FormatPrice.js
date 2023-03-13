const FormatPrice = ({ price }) => {
    console.log(price);
    return Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price); 
  };
  
  export default FormatPrice;