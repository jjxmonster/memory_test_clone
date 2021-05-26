"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db = process.env.MONGODB_URL;
console.log(db);
mongoose_1.default
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
const app = express_1.default();
const port = process.env.PORT || 3030;
app.get('/', (req, res) => {
    res.end('index');
});
app.listen(port, () => {
    console.log('listening');
});
//# sourceMappingURL=server.js.map