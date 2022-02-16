# Reading Notes 06

## All notes taken from Duckett's book and blog post

## JS

### Ch. 3 'Object Literals'

- Objects group together a set of variables and functions to create a model of something you would recognize from the real world. In an object, variables and funcjtions take on new names.

- In an object: variables become known as properties. 
- In an object: functions become known as methods. 

- *Litral Notation* is the easiest and most popular way to create objects. --> var hotel = { 
  name: 'rosewood HK',
  rooms: 40,
  booked: 25,
  **Method** checkAvailability: function ( ) {
    return .this.rooms - this.booked;
  } 
}:
- You access the properties or methods of an object using dot notation. you can allso access properties using square brackets. LIKE ===> 

var hotelName = hotel.name;
car roomsFree = hotel.checkAvailability();

- you can also access the properties of an object BUT NOT its methods using square bracket syntax.
  
var hotelName = hotel['name'];

* this notations is most commonly used when:
  - The name of the property is a number **NOTE** This should be generally avoided.
  - A variable is being used in place of the property name. 


### Ch. 5 'Document Object Model' 

- The DOM specifies how browsers should create a model of an HTML page and how JS can access and update the contents of a qeb page while it is in the browser window. 
- The DOM is neither part of HTML nor part of JS; it is a separate set of rules. It is implemented by all major browsers and covers TWO primary areas.

  1. Making a model of the HTML page.
    * When the browser loads a page, it crates a model of the page in memory. 
    * The DOM specifies the qay in qhich the browser should structure this model using a **DOM tree**
    * The DOM is called an object model because the model (the DOM tree) is made up of objects.
    * Each object represents a different part of the page loaded in the browser window. 
  2. Accessing and changing the HTML page.
    * The DOM defines methods and properties to access and update each object in this model, which in turn updates what the user sees in the browser.
    * DOM (sometimes calld an Application Programming Interface ['API']). User interfaces let people interact with programs; APIs let prgrams and scripts talk to each other. The DOM sates what your script can ask the browser about the current page, and how to tell the browsere to update what is being shown to the user.

  - As a browser loads a page, it crates a model of that page. the model is called a DOM tree, and it is stored in the browsers' memory. It consists of four main types of nodes.

  1. DOM Tree
  2. DOM Node
  3. Attribute Node
  4. Text Node

- Accessing and updating the DOM tree involves two steps:
  1. Locate the node tha t represents the element you want to work with.
  2. Use its text conted, child elements, and attributes

* The terms elements and element nodes are used interchangeably but when people say the DOM is working with an element, it is actually working with a dode that represents that element.

* Methods that find elements in the DOM tree are called DOM queries. When you need to work with an element more than once, you should use a variable to store the result of this query.

* When people talk about storing elements in variables, they are REALLY storing the location of the 
elements(s) within the DOM tree in a variable. The properties and methods of that element node work on the variables

- DOM wueries may retun one element, or they may return a NodeList, which is a collection of nodes.
- getElementById() and wuerySelector() can both search an entire document and return individual elements. both use a similar syntax. 

- When a DOM method can return more than one element, it returns a NodeList (even if it only finds one matching element).

- There are two ways to select an element from a NodeList: the **item()** method and array syntax. Both require the index number of the element of you want. 
  * the **item method** which will return an individual node from the NodeList. 
  * **Array Syntax** is preferred over the item() method because it is faster. Before selecting a node from the nodelist, check that it contains nodes. If you repeatedly use the nodelist, store it in a variable. 
    * You can access individual nodes using [] syntax similar to that used to access indiviutal items from an array. 

- When you have an element node you can select another element in relation to it using these **5** properties. 
  1. parentNode
  2. previousSibling
  3. nextSibling
  4. firstChild
  5. lastChild

* When you select a text node, you can retrive or amend the content of it using the nodeValu property 
  * document.getElementById('one').firstChild.nextSibling.nodeValue;

* the thextContent prperty allows you to collect or update just the text that is in the containing element AND its children. 
  * ('one').textContent

- There are two very different approaches to adding and removing content from a DOM tree: the innerHTML property and DOM manipulation. 
- DOM manipulation easily targets individual nodes in the DOM tree, wheras innerHTML is better suited to updatingentire fragments. 

* Using thi innerHTML property, you can access and amend the contents of an element, including any child elements. 
* DOM manipulation offers another technique to add now content to apage (rather than innerHTML). It involves three steps:
  1. Create the element: createElement()
  2. Give it content: createTextNode()
  3 Add it to the DOM: appendChild()

* DOM manipulation can be used to remove from the DOM tree.
  1. Store the element to be removed in a variable.
  2. Store the parent of that element in a variable.
  3. Remove the elemtent from its containing element. 

- Once you have an element node, you can use other properties and methods on that element node to access and change its attributes. 