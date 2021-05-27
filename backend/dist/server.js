"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongodb_1 = __importDefault(require("mongodb"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = express_1.default();
const dbUrl = process.env.MONGODB_URL;
const port = process.env.PORT || 3030;
const client = new mongodb_1.default.MongoClient(dbUrl);
app.use(cors_1.default());
app.use(express_1.json());
client.connect(err => {
    if (err) {
        console.log('error');
    }
    else {
        console.log('MongoDB connected...');
        const db = client.db('memory-test-users');
        const users = db.collection('users');
        app.post('/add-user', (req, res) => {
            const { googleId, name } = req.body.data.profileObj;
            users.findOne({ googleId }, (error, data) => {
                if (error) {
                    console.log('error');
                }
                else {
                    if (data === null) {
                        const newUser = {
                            googleId,
                            name,
                            games: [],
                        };
                        users.insertOne(newUser, () => {
                            res.send({ user: newUser });
                        });
                    }
                    else {
                        res.send({ user: data });
                    }
                }
            });
        });
        app.post('/add-score', (req, res) => {
            const { game, userId } = req.body;
            users.findOne({ googleId: userId }, (error, data) => {
                if (error) {
                    console.log('error');
                }
                else {
                    if (data !== null) {
                        const { games } = data;
                        const newGamesArray = [...games, game];
                        users.updateOne({ googleId: userId }, { $set: { games: newGamesArray } });
                    }
                    else
                        res.end();
                }
            });
        });
        app.get('/get-games/:id', (req, res) => {
            const { id } = req.params;
            if (id === undefined) {
                res.end('undefined');
            }
            else {
                users.findOne({ googleId: id }, (error, data) => {
                    if (error) {
                        console.log('error');
                    }
                    else {
                        res.send(data.games);
                    }
                });
            }
        });
    }
});
app.listen(port, () => {
    console.log('listening');
});
//# sourceMappingURL=server.js.map