import * as express from 'express';

// Models
import UserModel from '../models/user';

// HELPERS
import { errorJSON } from '../controllers/helpers';




class User {
    public router: express.Router;

    constructor() {

        this.router = express.Router();

        this.routes();

    }

    routes() {
        this.getUsers();
    }

    getUsers() {
        this.router.get('/all', (req, res, next) => {
            UserModel
                .find({})
                .exec()
                .then(respond => {
                    if (respond.length >= 1) {
                        res.status(200).json({
                            success: true,
                            count: respond.length,
                            users: respond
                        })
                    } else {
                        res.status(200).json({
                            success: false,
                            message: 'There\'s No Users Right Now!'
                        })
                    }
                })
                .catch(err => errorJSON(res, err))
        })
    }



}

export default new User().router;

