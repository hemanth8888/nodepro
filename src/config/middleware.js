import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";

export default app=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(compression());
    app.use(morgan("dev"));
    app.use(helmet());
    app.use(cors());
}