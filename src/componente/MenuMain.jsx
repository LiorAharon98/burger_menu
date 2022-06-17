
const MenuMain = ({ index,setItemsInCarts,setCountItems, price, info, img }) => {
  return (
    <div className="containerProduct">
      <img className="productImg" src={img} alt="" />
      <div className="info">{info}</div>
      <div className="containerPrice">
        <div className="price">{price}</div>
        <button
          onClick={() => {
            setItemsInCarts((prev)=>{
            return [...prev,{...prev.product, info , ...prev.price , price}]
            })
            setCountItems((prevCount) => {
              return prevCount + 1;
            });
          
          }}
          className="addBtn"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default MenuMain;
