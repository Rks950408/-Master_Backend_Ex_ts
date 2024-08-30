import  express from "express"
import "dotenv/config"
const app= express();

const PORT=process.env.PORT  || 7001

app.get("/",(req,res)=>{
    return res.json({
        message:"Hello, World!"
    });
});

app.listen(PORT,()=>console.log(`server is running on PORT ${PORT}`));