import { useCardUpdate, useDeleteItem } from "../context/cardContext";
import { useBasketUpdate, useRemoveBasket } from "../context/basketContext";
function Quantity(props) {
  const add = useCardUpdate();
  const remove = useDeleteItem();
  const addBasket = useBasketUpdate();
  const removeBasket = useRemoveBasket();

  function upquantity() {
    props.setQuantity(props.quantity + 1);
    if (props.inPanier) {
      addBasket(1);
      if (props.item) {
        add(props.item, 1);
      }
    }

    console.log("ija hani chaditek ");
  }
  function downquantity() {
    if (props.quantity > 1) {
      props.setQuantity(props.quantity - 1);
      if (props.inPanier) {
        removeBasket(1);
        if (props.item) {
          remove(props.item, 1);
        }
      }
    }
  }
  return (
    <div>
      <div className="adjustQuantity">
        <div className="quant">Quantité : </div>
        <div className="quantityPanier">{props.quantity}</div>
        <div className="updown">
          <div className="up" onClick={upquantity}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="rgba(49, 3, 68, 255)"
              className="bi bi-caret-up-fill"
              viewBox="0 0 16 16"
            >
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
          </div>
          <div className="down" onClick={downquantity}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="rgba(49, 3, 68, 255)"
              className="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Quantity;
