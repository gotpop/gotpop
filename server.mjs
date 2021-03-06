//server.js imports
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from 'express';
import favicon from 'express-favicon';
import Behance from './node/behance.service';
import fetch from "node-fetch";
import compression from 'compression';

// Node 10+ does not support __dirname
const __dirname = path.dirname(new URL(
    import.meta.url).pathname);

//Express variables
const port = process.env.PORT || 3001;
const envy = process.env.ENVIRONMENT;
const app = express();

// Behance variables
const goBehance = new Behance(process.env);
const thisBehance = goBehance.getProjects();

// Force https unless local dev environment
app.use(function (req, res, next) {
    if ((req.get('X-Forwarded-Proto') !== 'https') && envy !== 'local') {
        res.redirect('https://' + req.get('Host') + req.url);
    } else
        next();
});

app.use(compression());

// Set up server
app.use(express.static('build', {
    extensions: ['html', 'htm']
}));
app.use(favicon(__dirname + '/public/favicon.png'));

// Api
app.get('/behance/projects', function (req, res) {
    fetch(thisBehance)
        .then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(error => console.error(error));
});

app.get('/behance/project', function (req, res) {
    let projectId = req.query.projectId;
    const thisBehanceProject = goBehance.getProject(projectId);
    console.log("thisBehance", thisBehanceProject);

    fetch(thisBehanceProject)
        .then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(error => console.error(error));
});

app.all('*', (req, res) => {
    res.sendFile('index.html', {
        root: './build'
    });
});

app.listen(port, function () {
    console.log('GotPop is running on http://localhost:' + port);
});
