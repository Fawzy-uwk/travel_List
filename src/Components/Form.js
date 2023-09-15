import { useState } from "react";

const Form = ({ addItemHandler }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, quantity, id: Date.now(), packed: false };

    addItemHandler(newItem);
    setDescription("");
    setQuantity(1);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>What do you need for your trip?</p>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {/*how to loop an array of elements*/}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        placeholder="items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        name="items"
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default Form;
