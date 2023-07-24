class errorResponse extends Error{
    constructor(message,sattusCode){
       super(message);
       this.statusCode=this.statusCode;
    }
}

module.exports=errorResponse