const express = require('express');
const cors = require('express');
const estudianteRoutes = require('./routes/estudiantes');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use('/api/estudiantes',estudianteRoutes);
app.listen(PORT, () =>{
    console.log(`'servidor http://localhost:${PORT}`);
});