const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

//require('./models/User');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');

mongoose.connect(keys.mongoURI);
const app = express();

app.use(bodyParser.json());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey] 
}));

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);