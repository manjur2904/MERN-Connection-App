1. create the `frontend` app using react -> `npx create-react-app frontend`
2. create a `backend` folder and run -> `npm init -y` 
3. create a server file called `index.js`
4. import `express` and then create the `sever` using express
5. `listen` the server at any port number
6. write `server.post()` method to push data into the server
7. just return something in response to check whether it works corrctly or not `res.send('hello')`
8. in the frontend folder `App.js` file, connect to the server using `fetch` method
9. put the url in the fetch method, the same url where your backend is running, here it is `http://localhost:8000/user`, where `8000` is port number and the `/user` is the method where we are doing the `get` and `post` call
10. add object for fetch method accordingly to mention the method name `get` or `post`
11. there is switch between server `3000 to 8000` or anything use `cors()` method
12. create a `database` folder, cd to the database folder using `cd database`
13. and run the `mongodb` server using `mongod --dbpath ./` to run the mongodb in the current folder
14. import `mongoose` and add the main function to connect the `mongoose.connect('mongodb://127.0.0.1:27017/user')` here make sure you have entered the same page name where you are running your application in `server`
15. create the schema and create a object for the schema `const User = mongoose.model('User', userSchema)` 
16. create an object of `User` in the `post` method and add data to the object and save it using `object.save` command
17. for fetching the object from the database use the query `User.find({})` in the `get` method, you may add conditions here
18. and return the query result in the `get` method
19. again `fetch` write a fetch method function in the `App.js` to fetch the data
20. mention the method as `GET`, using a `useState` store the query and use it using map 
