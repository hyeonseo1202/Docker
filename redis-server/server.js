const express = require('express');
const redis = require('redis');

const PORT = 8080;
const client = redis.createClient({
    host: "redis-server",
    port: 6379
})
//APP
const app = express();
app.get('/',(req,res)=>{
    client.get("number", (err, number) => {
        res.send("Number is going up"+ number);
        client.set("number",parseInt(number)+1);
    });
});

app.listen(PORT);
console.log("Server is running")