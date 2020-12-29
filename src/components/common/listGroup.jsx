import React from "react";
const ListGroup = ({
  items,
  textProperties,
  valueProperties,
  onItemSelect,
  selectedItem,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperties]}
          className={
            selectedItem === item ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperties]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperties: "name",
  valueProperties: "_id",
};

export default ListGroup;
