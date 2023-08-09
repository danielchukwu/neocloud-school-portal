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
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const permissions_1 = __importDefault(require("./permissions"));
const server_1 = require("@apollo/server");
const graphql_middleware_1 = require("graphql-middleware");
const express4_1 = require("@apollo/server/express4");
const graphql_1 = require("./graphql");
const schema_1 = require("@graphql-tools/schema");
const jwt_1 = require("./jwt/jwt");
// load env variables into process.env
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// (){} : ! # _ => ""
const bootstrapApp = () => __awaiter(void 0, void 0, void 0, function* () {
    // Create apollo server
    const server = new server_1.ApolloServer({
        schema: (0, graphql_middleware_1.applyMiddleware)((0, schema_1.makeExecutableSchema)({ typeDefs: graphql_1.typeDefs, resolvers: graphql_1.resolvers }), permissions_1.default)
    });
    yield server.start();
    // middleware
    // server.applyMiddleware({ app });
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use("/graphql", (0, express4_1.expressMiddleware)(server, {
        context: ({ req }) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
            if (token) {
                const user = (0, jwt_1.decodeToken)(token);
                return { user };
            }
            return { user: null };
        }),
    }));
    // listen
    const dbURI = process.env.DBURI || "";
    mongoose_1.default
        .connect(dbURI)
        .then(() => {
        app.listen(port, () => {
            console.log(`🚀 Express Server ready at http://localhost:${port}`);
            console.log(`🚀 Graphql Server ready at http://localhost:${port}/graphql`);
        });
    })
        .catch((err) => console.log(err));
    // routes
    app.get("/", (req, res) => {
        res.json({ data: { routes: "Server up and running" } });
    });
});
bootstrapApp();
