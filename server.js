const app = require('./app');
const port = process.env.PORT || 3000;
const models  = require('./models');

const init = async () => {
    await models.User.sync()
    await models.Page.sync()
    app.listen(port, ()=> console.log(`listening to port ${port}`));
};

init();
