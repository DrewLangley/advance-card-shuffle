"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const game_1 = require("helpers/game");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.get('/play/:name/:hand/:shuffleType/:shuffleCount', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, hand, shuffleType, shuffleCount } = req.params;
    const result = yield (0, game_1.play)(name, Number(hand), Number(shuffleType), Number(shuffleCount));
    res.status(200).send(result);
}));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
exports.default = { app };
//# sourceMappingURL=server.js.map