import * as express from 'express';
import { Application, Request, Response } from 'express';

const app: Application = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
});

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong');
});

app.get('/health', (req: Request, res: Response) => {
    res.send('Server is healthy');
});

app.listen(port, () => {
    console.log(`Server is online at http://localhost:${port}`);
});
