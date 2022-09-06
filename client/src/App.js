import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { ProductList } from "./components/ProductList";
import { Summary } from "./components/Summary";

function App() {
  // 상태에 접근할 수 있는 변수명, 상태값 바꾸는 함수
  const [products, setProducts] = useState([
    {
      id: "uuid-1",
      productName: "콜롬비아커피1",
      category: "커피빈",
      price: 3000,
    },
    {
      id: "uuid-2",
      productName: "콜롬비아커피2",
      category: "커피빈",
      price: 3000,
    },
    {
      id: "uuid-3",
      productName: "콜롬비아커피3",
      category: "커피빈",
      price: 3000,
    },
  ]); //기본상태
  const [items, setItems] = useState([]);
  const handleAddClicked = (id) => {
    //같은 아이디 찾기
    const product = products.find((v) => v.id === id);
    const found = items.find((v) => v.id === id);
    const updatedItems =
      //상품확인...모든속성 복사, 개수 +1/없으면 기존 아이템 반환
      //기존것 복사 + 새로운 상품 추가
      found
        ? items.map((v) => (v.id === id ? { ...v, count: v.count + 1 } : v))
        : [
            ...items,
            {
              ...product,
              count: 1,
            },
          ];
    setItems(updatedItems);
  };

  return (
    <body className="container-fluid">
      <div className="row justify-content-center m-4">
        <h1 className="text-center">Grids & Circle</h1>
      </div>
      <div className="card">
        <div className="row">
          <div className="col-md-8 mt-4 d-flex flex-column align-items-start p-3 pt-0">
            <ProductList products={products} onAddClick={handleAddClicked} />
          </div>
          <div className="col-md-4 summary p-4">
            <Summary items={items} />
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
