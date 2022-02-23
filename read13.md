# Reading Notes 11

## All notes taken from link

## Local Storage for Web Applications

-  For native applications, the operating system typically provides an abstraction layer for storing and retrieving application-specific data like preferences or runtime state.

- If your native client application needs local storage beyond key/value pairs, you can embed your own database, invent your own file format, or any number of other solutions.

- Cookies were invented early in the web’s history, and indeed they can be used for persistent local storage of small amounts of data. But they have three potentially dealbreaking downsides:

  1. Cookies are included with every HTTP request, thereby slowing down your web application by needlessly transmitting the same data over and over.
  2. Cookies are included with every HTTP request, thereby sending data unencrypted over the internet (unless your entire web application is served over SSL).
  3. Cookies are limited to about 4 KB of data — enough to slow down your application (see above), but not enough to be terribly useful.

- So what is HTML5 Storage? Simply put, it’s a way for web pages to store named key/value pairs locally, within the client web browser.

- HTML5 Storage is based on named key/value pairs. You store data based on a named key, then you can retrieve that data with the same key.
  - The named key is a string. 
    - The data can be any type supported by JavaScript, including strings, Booleans, integers, or floats. However, the data is actually stored as a string. 
      - If you are storing and retrieving anything other than strings, you will need to use functions like parseInt() or parseFloat() to coerce your retrieved data into the expected JavaScript datatype.

        interface Storage {
            getter any getItem(in DOMString key);
              setter creator void setItem(in DOMString key, in any data);
        };

* Calling setItem() with a named key that already exists will silently overwrite the previous value. Calling getItem() with a non-existent key will return null rather than throw an exception.

* Like other JavaScript objects, you can treat the localStorage object as an associative array. Instead of using the getItem() and setItem() methods, you can simply use square brackets. For example, this snippet of code:

      var foo = localStorage.getItem("bar");
      // ...
      localStorage.setItem("bar", foo);

 **OR**
 
      var foo = localStorage["bar"];
      // ...
      localStorage["bar"] = foo;

