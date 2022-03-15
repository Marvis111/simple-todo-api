const { default: axios } = require("axios")

 


const userController = {
    index:(req,res) =>{
        res.send("welcome to the site...")
    },
    home:(req,res) =>{
        res.send('Welcome to the user page....')
    },
    getUser:async (req,res) =>{
        var {userId} = req.params,
        userData = [];
        try {
          const user  = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
          var {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos/`);
          //get user todos... 
          var userTodos = data.filter((todo)=>{
                return todo.userId == userId
            })
            //therefore userdata..
            const {id,name,email,phone} = user.data
            userData.push({
                id,name,email,phone,
                todos:userTodos
            });
          
            res.status(200).json(userData);
            
        } catch (error) {
            res.status(400).send('Error fetching user details: '+error.message);
        }
    }
}
module.exports = userController