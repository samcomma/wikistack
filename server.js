const http = require('http');
const app = require('./app');
const server = http.createServer(app)
const port = process.env.PORT || 3000;
const {db, Page, User}  = require('./models');





const init = async () => {
    // await User.sync()
    // await Page.sync()
    await db.sync()
    server.listen(port, ()=> console.log(`listening to port ${port}`));
};

init();
