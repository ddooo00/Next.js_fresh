export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h4 style={{ textAlign: "center", marginTop: "150px" }}>상품 목록</h4>
      {상품.map((a, i) => {
        return (
          <div className="food">
            <h4>{a} $40</h4>
            {/* <h4>{상품[i]}</h4> */}
          </div>
        );
      })}
    </div>
  );
}
