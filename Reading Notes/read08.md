# Reading Notes 08

## All notes taken from Duckett's book and LINK

## CSS

### Ch. 15 'layout'

- CSS treats each HTML element as if it is in its own box. This box will either be a **block-level** box or and **inline** box. 
- If one blovk-level elemtent sits inside another block-level element then the outer box is known as the *containing* or *parent* element. 

- CSS has the following **positioning schemes** that allow you to control the layout of a page: *normal flow, relative positioning, and absolute positioning.* You specify the positioning scheme using the position property in CSS. you can also float elements using the **float** property.

- To indicate wherre a box should be positioned, you may also need to use *box offset* properties to tell the browser how far from the top or bottom and left or right it should be placed. 

* normal flow - position:static
* relateive positioning - position:relative
* Absolute positioning - position:absolute
* Fixed positioning - position:fixed
* overlapping elements - z-index
* floating elements - float
* Clearing floats - clear

- *Fixed width layout* designs do not change size as the user increases or decreases the size of their browser window. These use px
- *liquid layout* designs stretch and contract as the user increases or decreases the size of their browser window. These tend to use %


