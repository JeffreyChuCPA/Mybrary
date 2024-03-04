if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express"); //*imports express framework
const app = express(); //*creates instance of express app
const expressLayouts = require("express-ejs-layouts"); //*imports the Express EJS layouts module, which allows you to create reusable layouts for your views.

const indexRouter = require("./routes/index");

app.set("view engine", "ejs"); //*sets EJS (Embedded JavaScript) as the view engine, which means you'll use EJS to render your web pages.
app.set("views", __dirname + "/views"); //* sets the directory where your EJS files are located. __dirname is a global variable in Node.js that represents the current directory.
app.set("layout", "layouts/layout"); //* specifies the layout file to be used for rendering views. This is where you define the common structure of your web pages.
app.use(expressLayouts); //* tells Express to use the Express EJS layouts module.
app.use(express.static("public")); //* serves static files (like CSS, images, or client-side JavaScript) from the 'public' directory. This allows you to include these files in your web pages.

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use("/", indexRouter); //*telling app to use this router as root of application

app.listen(process.env.PORT || 3000); //* starts the Express server. It listens for incoming HTTP requests on the specified port (process.env.PORT) or port 3000 if no port is specified.
