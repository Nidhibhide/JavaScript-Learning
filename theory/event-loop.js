//event loop

//function comes in Call stack to execute code

//if any function consist of external api's like setTimeout() , DOM API , fetch() , localStorage , console, location goes into  Web API's component to execute ( and all include in Browser )

//setTimeout() , also include above concepts not part of Javascript

//so we can use above features using browser global obj i.e window like window.setTimeout() but everytime "windows" no need to specify

//Callback queue - after execution completed of any of WEB APIS then it goes to "CallBack Queue". Also known as Task Queue.

//Event Loop - its work is to check "callback queue" if it present any job is there or not then it can pass to "Call Stack".

//Microtask Queue - It same like CallBack Queue but it has higher Priority It consist of network call , promises tasks (fetch , axios )

//Starvation - occurs when a microtask keeps generating another microtask continuously, preventing callback queue from ever getting a chance to execute.
