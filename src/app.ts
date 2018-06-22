import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import config from './config';



// ROUTES
import User from './api/routes/user';



class App {
    public app: express.Application;

    constructor() {
        this.app = express();

        this.databaseConnection();
        this.serverConfig();
        this.routes();
    }

    serverListen() {
        this.app.listen(config.PORT, () => {
            console.log(`App is Listening in Port ${config.PORT}`);
        })
    }

    routes() {
        this.app.use('/api/users' , User);
    }

    serverConfig() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }

    databaseConnection() {
        mongoose.connect(config.database);
        mongoose.connection.on('connected', () => {
            console.log('Database Connected');
        })
    }

}


const app: App = new App();


app.serverListen();





