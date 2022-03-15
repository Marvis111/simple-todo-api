const axios = require('axios');

const todoController = {
    getAllTodos : async (req,res) =>{
        let todosData = [];
        try {
            var {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos/`);
            for (let i = 0; i < data.length; i++) {
                todosData.push({
                    id:data[i].id,
                    title:data[i].title,
                    completed:data[i].completed
                });
            }
            res.status(200).json(todosData);
            
        } catch (error) {
            res.status(400).send('Error fetching todo details: '+error.message);
        }
    }
}

module.exports = todoController