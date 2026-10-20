import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import i18n from 'i18n';
import cookieParser from 'cookie-parser';

// variables
const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'production';
const PORT = process.env.PORT || 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
  * Configure Express middleware
  */

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
// Set EJS as the templating engine
app.set('view engine', 'ejs');
// Tell Express where to find your templates
app.set('views', path.join(__dirname, 'src/views'));

// i18n configuration
i18n.configure({
  locales: ['es', 'en'], 
    directory: path.join(__dirname, 'locales'), 
    defaultLocale: 'es', 
    cookie: 'lang', 
    autoReload: true, 
    updateFiles: false  
})
//middleware
app.use(cookieParser());
app.use(i18n.init);

/**
  * Routes
  */
app.get('/', async (req, res) => {
  const titleTag = 'Home | NonatoDevStudio';
    res.render('home', { titleTag });
});
app.get('/services', async (req, res) => {
    const titleTag = 'Services | NonatoDevStudio';
    const title = 'Our Services';
    res.render('services', { titleTag, title });
});
app.get('/projects', async (req, res) => {
    const titleTag = 'Projects | NonatoDevStudio';
    const title = 'Projects || portfolio';
    res.render('projects', { titleTag, title });
});
// routes for languages
app.get('/change-lang/:lang', (req, res) => {
    const lang = req.params.lang;
    if (['es', 'en'].includes(lang)) {
        res.cookie('lang', lang, { maxAge: 900000 }); 
    }
    res.redirect('/');
});

// 
app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
});