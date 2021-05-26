"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongodb_1 = __importDefault(require("mongodb"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = express_1.default();
const dbUrl = process.env.MONGODB_URL;
const port = process.env.PORT || 3030;
const client = new mongodb_1.default.MongoClient(dbUrl);
app.use(cors_1.default());
app.use(express_1.default.json());
client.connect(err => {
    if (err) {
        console.log('error');
    }
    else {
        console.log('MongoDB connected...');
        const db = client.db('memory-test-users');
        const users = db.collection('users');
        app.post('/add-user', (req, res) => {
            const { googleId } = req.body.data.profileObj;
            users.findOne({ googleId }, (error, data) => {
                if (error) {
                    console.log('error');
                }
                else {
                    if (data === null) {
                        const newUser = {
                            googleId,
                            games: {},
                        };
                        users.insertOne(newUser);
                    }
                    else {
                        console.log('already exist');
                    }
                }
            });
            res.end(200);
        });
    }
});
app.listen(port, () => {
    console.log('listening');
});
//# sourceMappingURL=server.js.map