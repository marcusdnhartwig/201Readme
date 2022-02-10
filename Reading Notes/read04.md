# Reading Notes 04

# All notes are from Duckett's books "javaScript" & 'HTML' & from Code Fellows "6 reasons fro pair programming"

# HTML

## Ch. 4 "Links"

- Links are the defining feature of the qeb because they allow you to move from one web page to another - enabliing the very idea of browsing or surfing. 

- Links are crated using the <'a> element. y0ou specify which page you want to link to using the href attribute. 

- on larger sites it is a good idea to organize your code by placing the pages for each different section of the site into a new folder. folders on a website are often referred to as directories. 

- email links href-'mailto:
- Opening links in a new window = target a href='link' target='_blank'>what people will click< /a >

## Ch. 15 "Layout"

- if one block-level element sits inside another block-level element then the outer box is know as the **containing** or **parent** element.

- normal flow = position:static
- relative positioning = position: relative
- absolute positioning = position: absolute
- fixed positioning = position: fixed
- overlapping elements? = z-index
- floating elements = float
- clearing floats = clear

### Layout Grids

- Composition in any visual art is the placement or arrangement of visual element -how they are organized on a page. 


# JS

## Ch. 3 / part one "Functions, Methods, & Objects"

- Browsers require very detailed instructions about what we want them to do. Therefore, coplex scripts can run to hundreds... MORE... of lines. Programmers use funcions, methods, and objects to organize the code. 

- **Functions & Methods:** Functions consist of a series of statements that have been grouped together because they preform a secific tast. A method is the same as a funtion, except methods are created inside and are part of and object.

- **Objects:** are made up of properties and methods. 

- Functions let you group a series of statements together to preform a specific tast. If different parts of a script repeat the same task, you can reuse the function.

- To creat a function you give it a name and then write the statements needed to achieve its task inside the curly braces. this is known as **function declaration**

- Having declared the function, you can then execute all the statements between its curly braces with just on line of code. this is known as **calling the function**

- Sometimes a funtion needs specific info to preform its task. In such cases when yo declare the funcion you give it **parameters** inside the funcion. the parameters act like **variables**

- When you call a funcion that has parameters you specify the values it should use in the parentheses that follow its name. the values are called **arguments** and they can be provided as values or as variables. 

## Article: "6 Reasons for Pair Programming"

- pair programming commonly involves two roles: the Driver and the Navigator. The Driver is the programmer who is typing and the only one whose hands are on the keyboard.The Navigator uses their words to guide the Driver but does not provide any direct input to the computer. The Navigator thinks about the big picture, what comes next, how an algorithm might be converted in to code, while scanning for typos or bugs.

- Pair programming touches on all four skills: developers explain out loud what the code should do, listen to others’ guidance, read code that others have written, and write code themselves.

