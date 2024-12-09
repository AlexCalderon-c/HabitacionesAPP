import app from './app.js';
import { inicializaTabla } from './models/user.model.js';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try{
    await inicializaTabla();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }catch(error){
    console.error('Error starting server', error);
    process.exit(1);
  }
}

startServer();

