const { exec, spawn, execSync, spawnSync } = require('child_process');
// exec('ls', (err, stdout, sterr) => {
//   if (err) console.error(err);
//   console.log(stdout);
// });
// var ls = spawn('ls');
// ls.stdout.on('data', (data) => {
//   console.log(data.toString());
// });
// ls.stderr.on('error', (err) => {
//   console.error(err);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

// var data = execSync('node 45_command_line_args.js 10');
// console.log(data.toString());

// var data = spawnSync('node', ['45_command_line_args.js', 6]);
// console.log(data.stdout.toString());
