//events
//1.event bubbling - when click on child button , Events starts executing from child and moves upward to its parents elements

//2.event capturing - when click on child button , Events starts executing from parent and moves downward to its child elements.
//It also known as Trickling Event.
//syntax -

//i need to add flag to convert into event capturing i.e
//addEventHandlrt('click'),()=>{

//  }, true )//value of event capturing.

//by default it consider as event bubbling .

//If we mixed up events bubbling and capturing then it consider propogation from top to bottom i.e capturing happens 1st then bubbling .

//e.stopPropagation() used to stop propogation i.e event bubbling and capturing . 

//It still present in React too.

//Event Delegation - It means instead of attch seperate events to child ele it attch to its parents but it can done using event bubbling.
//example - instead of apply event of each item we will apply on #list
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
