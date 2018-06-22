import * as mongoose from 'mongoose';




class User {
    public model: mongoose.Model<any>;
    public schema: mongoose.Schema;
    constructor() {
        this.schemaDesign();
        this.model = mongoose.model('User' , this.schema);
    }

    schemaDesign() {
        this.schema = new mongoose.Schema({
            name: {
                type: String,
                required: true
            }
        });
    }

}


export default new User().model;
