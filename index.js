import app from "./app.js";
import "./databases.js"
app.listen(app.get('port'), () => console.log('Server Listen on port' + app.get ('port')));