const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const ROOT = __dirname;
const PORT = Number(process.env.PORT || 3020);
const STATE_FILE = path.join(ROOT, 'data', 'operator-state.json');
const MAX_BODY = 1024 * 1024;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

function defaultState() {
  return {
    tankLevels: {},
    restaurantEdits: {},
    restaurantAdditions: [],
    updatedAt: null,
  };
}

function readState() {
  try {
    return { ...defaultState(), ...JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')) };
  } catch {
    return defaultState();
  }
}

function writeState(state) {
  fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  const next = { ...defaultState(), ...state, updatedAt: new Date().toISOString() };
  const temp = `${STATE_FILE}.tmp`;
  fs.writeFileSync(temp, `${JSON.stringify(next, null, 2)}\n`);
  fs.renameSync(temp, STATE_FILE);
  return next;
}

function sendJson(res, status, data) {
  res.writeHead(status, {
    'Content-Type': TYPES['.json'],
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(data));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > MAX_BODY) {
        reject(new Error('Request body too large'));
        req.destroy();
      }
    });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

function cleanStatePatch(input) {
  const patch = {};
  if (input && typeof input.tankLevels === 'object' && !Array.isArray(input.tankLevels)) {
    patch.tankLevels = input.tankLevels;
  }
  if (input && typeof input.restaurantEdits === 'object' && !Array.isArray(input.restaurantEdits)) {
    patch.restaurantEdits = input.restaurantEdits;
  }
  if (input && Array.isArray(input.restaurantAdditions)) {
    patch.restaurantAdditions = input.restaurantAdditions;
  }
  return patch;
}

async function handleState(req, res) {
  if (req.method === 'OPTIONS') {
    sendJson(res, 204, {});
    return;
  }
  if (req.method === 'GET') {
    sendJson(res, 200, readState());
    return;
  }
  if (req.method !== 'POST' && req.method !== 'PUT') {
    sendJson(res, 405, { error: 'Method not allowed' });
    return;
  }
  try {
    const body = await readBody(req);
    const patch = cleanStatePatch(JSON.parse(body || '{}'));
    const next = writeState({ ...readState(), ...patch });
    sendJson(res, 200, next);
  } catch (error) {
    sendJson(res, 400, { error: error.message || 'Bad request' });
  }
}

function safeStaticPath(pathname) {
  const decoded = decodeURIComponent(pathname);
  const requested = decoded === '/' ? '/index.html' : decoded;
  const fullPath = path.resolve(ROOT, `.${requested}`);
  if (!fullPath.startsWith(ROOT)) return null;
  return fullPath;
}

function serveStatic(req, res, pathname) {
  const filePath = safeStaticPath(pathname);
  if (!filePath) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': TYPES[ext] || 'application/octet-stream',
      'Cache-Control': ext === '.html' ? 'no-store' : 'public, max-age=60',
    });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  if (url.pathname === '/api/operator-state') {
    handleState(req, res);
    return;
  }
  serveStatic(req, res, url.pathname);
});

server.listen(PORT, () => {
  console.log(`Ameripro app running at http://localhost:${PORT}`);
});
