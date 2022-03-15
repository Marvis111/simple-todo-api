const indexRoutes = require('./routes');
const todoRoutes = require('./routes/todos');
const userRoutes = require('./routes/users');

const express = require('express'),

app = express();

app.set('port',process.env.PORT || 9000)
app.use(express.json());

app.use(express.urlencoded({extended:false}));

//routes
app.use("/",indexRoutes);
app.use("/todos",todoRoutes);
app.use('/users',userRoutes);


app.listen(app.get('port'),()=>{
    console.log('server running on '+app.get('port'))
});
