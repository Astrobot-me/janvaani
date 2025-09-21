import express from "express"; 
import cors from "cors"
import morgan from "morgan";

const app = express(); 




//body parser for json post bodies
app.use(express.json()); 

//allowed cross origins
app.use(cors({
    origin: "*"
}))

//logger middleware
app.use(morgan("dev"))


//pinp pong typa route
app.get("/" , (req,res) =>{
    res.json({
        status:"request recieved sucessfully"
    }).status(200)
})

app.listen(process.env.PORT || 9000, ()=> { 

    console.log("[BACKEND] Janvaani-be started at port 9000")
})

export default app 