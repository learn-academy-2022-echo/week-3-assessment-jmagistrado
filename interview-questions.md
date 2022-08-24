# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is a tag that is used within React, it very similar in looks as HTML, as it would be wrapped within <> brackets.  JSX is used to display information within your web application. 

Researched answer: JSX is a form of markdown syntax to JavaScript. JSX produces elements within React and also makes it easy to read and understand the code block rather than using  a templating language. The difference between JavaSCript and HTML is that JSX uses the syntax className to change the display and the behavior of the particular element. 

I am familiar with JSX and have used it in past React projects. JSX makes it easy to to write HTML directly within JavaScript code. I have used <h1>,<p>,<div> just to name a few to help me display information for my application. An example of JSX, would by if I wanted a header with my title on my page, I would be able to wrap my title between a <h1></h1> JSX. This would not only allow me to display my title.

2. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer: yarn is a folder that has many files that allow a developer to have a local server on their local machine to see the visuals on their web application. When you are able to download yarn on your local machine, yarn is able to render your application. 

Researched answer: Yarn is a package manager that helps with managing dependencies like node modules that are given to your local machine. It stands for "Yet Another Resource Navigator".  With yarn, you are able to utilize and share the same code with other developers. The type of files that yarn modifies would be node modules and yarn.lock. Whenever a new dependency is modified, added or removed, the yarn.lock will automatically updated. I have used yarn in past many of times. An example of this is when I am working with React and need to use yarn within my terminal. By using yarn, I am able to manage the node modules for my local server to start.

3. What is an anonymous function in JavaScript?

Your answer: An anonymous function in JavaScript is when you pass a function that does not have a name. 

Researched answer: An anonymous function in JavaScript actually means that it is a function that doesn't have a name associated with it. In normal circumstances, a function would use the function keyword to define within the code that we are declaring a function. Instead, when passing an anonymous function, you would state you are using a function by using the arrow syntax =>. Anonymous functions are mostly used to be passed down within higher order functions. In an example of an anonymous function that I have used it in the past was when I was I was given an array and I needed to iterate through the array to multiple the values by 3. To do this, I used a high order function and .map() so I can get the an update array with new values. Because high order functions use the arrow syntax, I was using an anonymous function. 

4. What is the difference between a class and an object?

Your answer: Objects have key:value pairs. Class are like functions that are like the blueprint to an object. 

Researched answer: Classes are a function that can contain both behavior and data. Within classes, there are some key words that are use to create and retrieve information from the class. These keywords are constructor which is used to make object and when we want to initialize the object properties. This is another keyword which is just refers to what object it it belongs to. Lastly, another keyword new is used when you want to create a new instance of a class. 

An object is actually a composite data type that has key:value pairs which are stored in curly braces. The key will represent a data type of a symbol and the value can hold any valid JavaScript data types like a string, number, boolean, and array just to name a few. Objects can also hold functions which would be called methods. I have had experience with objects in the past. I had an object that was holding a key value pair about a product and its cost. To be able to access the information within this object, I had to use a method that takes in the product object as an argument and have it log back to me the price of the product. 

5. What is the difference between state and props in React?

Your answer: State is variable that is used within React. State works locally within the logic/parent component in which you are able to store data and it has the ability to be updated with new data. Although State is a variable that lives locally, the information it stores can be accessed by children components through props. 

Props is a way that developers are able to send information to their other components. With React, there is a parent component where all the logic lives and then children components which are used to display the logic that has been built. With props, you have the ability to utilize the logic and functions that live within the parent component by sending it down stream to other components so that they can have access to certain information that needs to be displayed on the application. 

Researched answer: As you are able to pull information and store it within State, it allows for it to become dynamic because the information that is stored will change as the user interacts with the application. When we want to change the value of the variable, we can use the method of useState(). useState() is considered a React hook which allows you to hook reusable features in React. 

An example of where I use useState() was when I wanted State to capture and hold the information of previous rolls on a dice that a user rolled when interacting with my web application. By using State, it allowed me to store the previous rolls that were done on the page and I was able to pull the data that it was storing and display it somewhere else within the web page. 

Props would be considered a specialized object that helps with passing information from one main component downward to other components. While State is something that is consistently updated by user interaction, props cannot change and their value stays the same. 

I have used props in the past to pass information down. Going back to my dice example - after I was able to store the previous roll data I collected from the user, props gave me the ability to pull that information out of state, and give it to my display component. By doing this, my display component has access to the information and can show it in the appropriate place. 

6. STRETCH: Which is the difference between a div and a span?

Your answer: not sure 

Researched answer:

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Object-oriented programming, also known as OOP, is something that developers came up with to deal with the complexities of applications as they grow in size and became more complicated. OOP have containers of objects that stores data and behavior. 

2. Ruby: Ruby is a programing language that has become popular for its simple, easy to read and writing style. Ruby can be used for any purposes including web development, data processing, and web scraping and crawling just to name a few. 

3. Implicit return: The programming language Ruby has a feature called implicit return which will automatically return the value of the last line of your method instead of needing to call the function. 

4. Ruby blocks: Ruby blocks are similar as a method in JavaScript however, they do not have an object. Within a ruby block, you are able to take in an argument and then have the block return a value. 

5. Ruby hashes: A ruby hash would be similar to an array within JavaScript. One difference is that hashes do not contain an index, instead their elements can be located by their unique key. Ruby hashes also store their data with key-value pairs. 
