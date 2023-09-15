import { useState } from "react";

const Items=({ items, deleteItemHandler, checkboxHandler,clearListHandler })=> {
  //sort List items
  const [sortBy,setSort]=useState("input");
  
  let sortedItems
  if (sortBy==="input") sortedItems=items;

  if (sortBy==="description"){
    sortedItems =items.slice().sort((a,b)=> a.description.localeCompare(b.description));
  }
  if (sortBy==="packed"){
    sortedItems =items.slice().sort((a,b)=> Number(a.packed)- Number(b.packed));
  }
///

  return (
    <div className="container">
      <ul className="items">
        {sortedItems.map((item) => {
          return (
            <li key={item.id}>
              <input
                type="checkbox"
                value={item.packed}
                onChange={() => checkboxHandler(item.id)}
              />
              <span
                style={item.packed ? { textDecoration: "line-Through" } : {}}
              >
                {item.quantity}.{item.description}
              </span>
              <button onClick={() => deleteItemHandler(item.id)}>
                &times;
              </button>
            </li>
          );
        })}
      </ul>
      <div className="select">
        <select value={sortBy} onChange={(e)=>setSort(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={()=>clearListHandler()}>Clear List</button>
      </div>
    </div>
  );
}

// const Item = (item) => {
//   <li>
//     <input type="checkbox" />
//     <span key={item.id}>
//       {item.id}.{item.itemName}
//     </span>
//     <button>&times;</button>
//   </li>;
// };

export default Items;
