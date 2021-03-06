import express = require('express');
import routes from './routes';


const app = express();
const PORT = 3333;

app.use(routes);

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
