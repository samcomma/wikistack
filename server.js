const app = require('./app');
const port = process.env.PORT || 3000;
const { db } = require('./models');

app.listen(port, ()=> console.log(`listening to port ${port}`));
