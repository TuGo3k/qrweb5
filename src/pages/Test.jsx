import React, { useState } from "react";

const App = () => {
  // Array of objects
  const items = [
    { id: 1, title: "Item 1", selected: false },
    { id: 2, title: "Item 2", selected: false },
    { id: 3, title: "Item 3", selected: false },
    { id: 4, title: "Item 4", selected: false },
  ];

  // State for the list with a default selected object
  const [list, setList] = useState(
    items.map((item, index) => ({
      ...item,
      selected: index === 0, // Set the default selected object
    }))
  );

  // Toggle selection of an item
  const toggleSelect = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id
          ? { ...item, selected: !item.selected }
          : { ...item, selected: false } // Ensure only one is selected
      )
    );
  };

  // Filter selected items
  const selectedItem = list.find((item) => item.selected);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-lg font-bold mb-4">Selectable Items</h1>

      {/* List Items */}
      <div className="grid grid-cols-2 gap-4">
        {list.map((item) => (
          <button
            key={item.id}
            onClick={() => toggleSelect(item.id)}
            className={`p-4 border rounded ${
              item.selected ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Selected Item */}
      {selectedItem ? (
        <div className="mt-5">
          <h2 className="text-lg font-semibold">Selected Item</h2>
          <p>ID: {selectedItem.id}</p>
          <p>Title: {selectedItem.title}</p>
        </div>
      ) : (
        <p className="mt-5 text-red-500">No item selected</p>
      )}
    </div>
  );
};

export default App;
