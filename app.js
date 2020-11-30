// TODO

// Array of grocery items
var groceryItems = ['Eggs', 'Coffee', 'Jalapenos'];


// Click event
var onListItemClick = (event) => {
  console.log('I got clicked!');
}


// Individual grocery list item
class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li onClick={onListItemClick}>{this.props.item}</li>
    );
  }
}

// Grocery List ul
var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
)

// App container
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems={groceryItems} />
  </div>
)




ReactDOM.render(<App />, document.getElementById('app'));


