// TODO

// Individual grocery list item
class GroceryListItem extends React.Component {

  // Set up the constructor function
  constructor(props) {
    super(props);

    // Set the initial state
    this.state = {
      done: false
    }
  }

  // Hover event function
  onListItemHover() {

    // Change/set the state property
    this.setState({
      done: !this.state.done
    })
  }

  render() {

    // Add CSS style declaration
    var style = {
      fontWeight: this.state.done ? 'bold' : 'none'
    };

    // Insert the style property
    // And bind the event to the object that triggers it
    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }
}

// Grocery List component ul
var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
)

// App container that contains the Grocery List component
// groceryItems property set to the array of items
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems={groceryItems} />
  </div>
)

// Array of grocery items
var groceryItems = ['Eggs', 'Coffee', 'Jalapenos'];

ReactDOM.render(<App />, document.getElementById('app'));


