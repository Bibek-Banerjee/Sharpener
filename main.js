var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');

  // Add class
  li.className = 'list-group-item';

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter Items
function filterItems(e){
    var text = e.target.value.toLowerCase();
    // console.log(itemList);
    var itm = itemList.getElementsByTagName('li');
    // console.log(itm)
    Array.from(itm).forEach(function(item){
        var itemName = item.firstChild.textContent;
        // console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display='Block';
        }
        else{
            item.style.display='none';
        }
    })
}
