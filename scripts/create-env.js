const fs = require('fs');

fs.writeFileSync('./.env', `REACT_APP_CATS_API_URL=${process.env.REACT_APP_CATS_API_URL}\n`);
fs.writeFileSync('./.env', `REACT_APP_CATS_API_KEY=${process.env.REACT_APP_CATS_API_KEY}\n`);
fs.writeFileSync('./.env', `REACT_APP_CATS_DAY_NUM=${process.env.REACT_APP_CATS_DAY_NUM}\n`);
