require('dotenv').config();
const express = require('express');
const bfhlRoutes = require('./routes/bfhl');
const healthRoutes = require('./routes/health');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

app.use('/bfhl', bfhlRoutes);
app.use('/health', healthRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
