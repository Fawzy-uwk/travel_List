import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Items from "./Components/Items";
import Logo from "./Components/Logo";

function App() {
  const [items, setItem] = useState([]);
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  const addItemHandler = (item) => {
    setItem((items) => [...items, item]);
  };
  const deleteItemHandler = (id) => {
    setItem((items) => items.filter((item) => item.id !== id));
  };
  const checkboxHandler = (id) => {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  //clear List
  const clearListHandler = () => {
    const confirmation=window.confirm("Are you sure that you want to clear the list?!!!")

    if(confirmation) setItem([]);
  };
  return (
    <div className="App">
      <Logo />
      <Form addItemHandler={addItemHandler} />
      <Items
        items={items}
        deleteItemHandler={deleteItemHandler}
        checkboxHandler={checkboxHandler}
        clearListHandler={clearListHandler}
      />
      <Footer
        numItems={numItems}
        packedItems={packedItems}
        percentage={percentage}
      />
    </div>
  );
}

export default App;
