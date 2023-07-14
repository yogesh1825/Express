const cheak = (req,res,next)=>{
    let {email,password} = req.body;
    if(email&&password){
        next()
    }
    else{
        res.send('Please enter email and password')
    }


}

module.exports = cheak