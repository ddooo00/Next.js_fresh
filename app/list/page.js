// import Image from "next/image";
// import 작명 from "../../public/food0.png";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h4 style={{ textAlign: "center", marginTop: "150px" }}>상품 목록</h4>
      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            {/* <Image src={작명} className="food-img" /> */}
            {/* import해서 불러와야 최적화 된 이미지가 보여짐 ,하지만 외부 사진 불러올 땐 next config에 도메인, 경로 등, width, height도 써야해서 귀찮아짐*/}
            <img src={`/food${i}.png`} className="food-img" />
            {/* <img src={"/food" + i + ".png"} className="food-img" /> */}
            <h4>{a} $40</h4>
            {/* <h4>{상품[i]}</h4> */}
          </div>
        );
      })}
    </div>
  );
}
