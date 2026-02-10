require('dotenv').config();
const express = require('express');
const path = require('path');
const bfhlRoutes = require('./routes/bfhl');
const healthRoutes = require('./routes/health');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
    <head>
        <title>Bajaj Assessment API</title>
        <style>
            body { font-family: Arial, sans-serif; background: #f7f7f7; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px #ccc; padding: 32px; }
            h1 { color: #1a237e; }
            code { background: #eee; padding: 2px 6px; border-radius: 4px; }
            .email { color: #388e3c; font-weight: bold; }
            .resume-btn { display:inline-block; margin:16px 0; padding:10px 18px; background:#1a237e; color:#fff; border:none; border-radius:5px; text-decoration:none; font-size:16px; }
            .resume-btn:hover { background:#3949ab; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Welcome to Bajaj Assessment API</h1>
            <p>Submitted by: <span class="email">garvit0080.be23@chitkara.edu.in</span> (Garvit Chawla)</p>
            <a href="/public/resume.pdf" class="resume-btn" download>Download My Resume (PDF)</a>
            <h2>Available Endpoints</h2>
            <ul>
                <li><code>POST /bfhl</code> — Fibonacci, Prime, LCM, HCF, AI</li>
                <li><code>GET /health</code> — Health check</li>
            </ul>
            <h3>Try in Postman:</h3>
            <pre>{
  "fibonacci": 7
}</pre>
            <p>or use <code>prime</code>, <code>lcm</code>, <code>hcf</code>, <code>AI</code> as per assignment.</p>
            <p style="color:#888;font-size:13px;">Made with Node.js & Express</p>
            <footer style="margin-top:32px;text-align:center;color:#aaa;font-size:13px;">
                &copy; 2026 Garvit Chawla. All rights reserved.
            </footer>
        </div>
    </body>
    </html>`);
});
app.use(express.json());


app.use('/bfhl', bfhlRoutes);
app.use('/health', healthRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
