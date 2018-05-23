global._path=   new(require('./path'))();
global._config= new(require('./config'))();
global._log=    new(require('./log'))();
require('./controllers/controllers');
// global._controllers= new(require('./controllers/controllers'))();
_log.info(global._controllers)
