import PythonShell from 'python-shell';
PythonShell.run('username.py', function (err) {
    console.log('hi')
    if (err) throw err;
    console.log('finished');
  });