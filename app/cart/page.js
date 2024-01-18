export default function Cart() {
  let 장바구니 = ["Tomatoes", "Pasta"];

  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={장바구니[0]} />
      <CartItem item={장바구니[1]} />
    </div>
  );
}

// 부모 -> 자식에게 줄 때 props(반대는 X), 데이터가 많은 컴포에서 필요하면 최고 부모 컴포에 보관하자

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
// next server compo에서는 deduplication으로 데이터 여러번 요청해도 ㄱㅊ음
