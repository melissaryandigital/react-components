// TODO

var groceryItems = ['Eggs', 'Coffee', 'Jalapenos'];

// displays one item as a list item
var GroceryListItem = (props) => (
  <li>{props.item}</li>
)

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
)

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems={groceryItems} />
  </div>
)




ReactDOM.render(<App />, document.getElementById('app'));


