var adminSchema = new adminSchema({
    username:{
        type:string,
        required:true,
        trim:true
    },
    password:{
        type:string,
        required:true
    }
});

model.export = adminSchema;