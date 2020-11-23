// Dependencies
const express = require('express');
const routes = require('./routes');

// Express instance
const app = express();

// Variable Port
const PORT = process.env.PORT || 9001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// If our node environment is production we will serve up our static assets from the build folder
if (process.env.NODE_ENV === 'production') {
    // The react app is called 'client' and we are accessing the build folder that is initialized in the postbuild scripts.
    app.use(express.static('client/build'))
};

// API and View Routes
app.get("/test/",(res, req)=>
 // .get(categoryController.loadCatInfo)
 {
     console.log("Hello?");
     return res.json({test:"Hello"})
 }
);

app.use(routes);
// Start the server
app.listen(PORT, () => {
    if (process.env.NODE_ENV !== 'production') {
        console.log(`Server listening at http://localhost:${PORT}`)
    };
});