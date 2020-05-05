import React from 'react';

const List = (ListItemComponent, propName = 'list') => {

  function CreateListComponent(props) {
    const listItems = props[propName].map(item => (
      <li key={item.id}>
        <ListItemComponent {...item} />
      </li>
    ));

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
  CreateListComponent.displayName = `List{${ListItemComponent.name}}`;

};

export default List;

