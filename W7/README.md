# Module 3 Week7 Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)

- [x] REST Representational State Transfer
- [x] More HTTP methods
- [x] Method Override [Stretch]

### Storing passwords
* We **never** want to store passwords as plain text
* Passwords should always be _hashed_ 
* **Hashing**:
  * The original string is passed into a function that performs some kind of transformation on it and returns a different string (the _hash_)
  * This is a one way process: a hashed value cannot be retrieved
* We make hashing more secure by adding a _salt_ to the original string prior to hashing
* This [helps to protect against Rainbow Table attacks](https://stackoverflow.com/questions/420843/how-does-password-salt-help-against-a-rainbow-table-attack)

#
### Encrypted cookies
* Plain text cookies can be manipulated by users
* It's better practice to use _encrypted_ cookies
* **Encryption**:
  * Similar to hashing, the string is scrambled/transformed by a function
  * This is a two-way process: encrypted strings can be decrypted by the intended recipient
#
### HTTP Secure (HTTPS)
* HTTPS uses Transport Layer Security (TLS) to encrypt communication between client and server
* Encrypted using asymmetric cryptography which uses a public key and private key system
* The public key is available to anyone who wants it and is used to encrypt the communication
* The private key is known only to the receiver and is used to decrypt the communication
#
### When to use...
* Plain Text Cookies:
  * Almost never use plain cookies
  * Maybe for:
    * Language selection
    * Shopping cart for non-logged in users
    * Analytics
* Encrypted Cookies:
  * Do this by default
  * Only store a way to uniquely identify the user (eg. `user_id` or `username` can be used to look up values in a database or object)






### REST
* REST means that the path that we are going to should represent the data being transferred
* An API that uses the REST convention is said to be RESTful
* RESTful routes look like:
```
  | **Method** | **Path** | **Purpose** | **BREAD**
  |:---:|:---|:---|
  | GET | /pets | Retrieve all of a resource (Browse) | **BROWSE**
  | GET | /pets/:id | Retrieve a particular resource (Read) | **READ**
  | POST | /pets/:id | Update a resource (Edit) | **DELETE/UPDATE**
  | POST | /pets | Create a new resource (Add) | **ADD**
  | POST | /pets/:id/delete | Delete an existing resource (Delete) | **DELETE**
```
#
### More HTTP methods
- We have more [*verbs*](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) available to us than just `GET` and `POST`
- Popular ones are `PUT`, `PATCH`, and `DELETE`
- `PUT`: used to replace an existing resource
- `PATCH`: update part of an exisiting resource
- `DELETE`: delete an existing resource
- We can access these other methods via AJAX requests (we'll introduce you to AJAX in week 4) or by using the [`method-override`](https://www.npmjs.com/package/method-override) package
- Using these new verbs, our routes table now looks like:
```
  | **Method** | **Path** | **Purpose** | **BREAD** | **CRUD**
  |:---:|:---|:---|
  | GET | /resources | Retrieve all of a resource (Browse) | *B* | *R*
  | GET | /resources/:id | Retrieve a particular resource (Read) | **R** | **R**
  | PUT | /resources/:id | Replace a resource (Edit) | **E** | **U**
  | PATCH | /resources/:id | Update a resource (Edit) | **E** | **U**
  | POST | /resources | Create a new resource (Add) | **A** | **A**
  | DELETE | /resources/:id | Delete an existing resource (Delete) | **D** | **D**
```