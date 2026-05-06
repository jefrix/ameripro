const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const WINDOWS_GIT = 'C:\\Program Files\\Git\\cmd\\git.exe';
const GIT = process.env.GIT || (process.platform === 'win32' && fs.existsSync(WINDOWS_GIT) ? WINDOWS_GIT : 'git');
const STATE_PATH = 'data/operator-state.json';

function git(args) {
  return execFileSync(GIT, args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
}

function changed() {
  return git(['status', '--short', STATE_PATH]).length > 0;
}

if (!changed()) {
  console.log('No operator state changes to publish.');
  process.exit(0);
}

git(['add', STATE_PATH]);
const stamp = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
git(['commit', '-m', `Publish operator state ${stamp}`]);
git(['push', 'origin', 'main']);
console.log('Published operator state to GitHub.');
