'use strict';

var babel = require('babel-core');
var path = require('path');
var fs = require('fs');
var shell = require('shelljs');
var exec = require('child_process').exec;

process.env.BABEL_ENV = 'development';

var LIB_PATH = './build';
var taskLibDir = './libs';


var emptyDir = function(fileUrl){
  var files = fs.readdirSync(fileUrl);//读取该文件夹
  files.forEach(function(file){
    var stats = fs.statSync(fileUrl+'/'+file);
    if(stats.isDirectory()){
      emptyDir(fileUrl+'/'+file);
    }else{
      fs.unlinkSync(fileUrl+'/'+file);
    }
  });
}

//mkdir lib
function fsExistsSync(path) {
  try{
    fs.accessSync(path,fs.F_OK);
  }catch(e){
    return false;
  }
  return true;
}
if(!fsExistsSync(LIB_PATH)){
  // fs.mkdirSync(LIB_PATH);
  shell.mkdir('-p', LIB_PATH + '/libs');
} else {
  emptyDir(LIB_PATH);
}


//copy scss
// var scssFile = fs.readFileSync('./index.scss', 'utf-8');
// fs.writeFileSync(LIB_PATH + '/index.scss', scssFile, { encoding: 'utf-8' });


//babel
var taskFiles = ['index.js'];
fs.readdirSync(taskLibDir).forEach(function (taskConfigFile) {
  if (/\.js$/.test(taskConfigFile)) {
    var taskFile = path.join(taskLibDir, taskConfigFile);
    taskFiles.push(taskFile);
  }
});

taskFiles.forEach(function(taskFile){
  console.log(taskFile)
  babel.transformFile(taskFile, {code: true, "presets": ['babel-preset-es2015']}, function(err, result){
    if(err){
      console.log(err)
      return ;
    }
    fs.writeFileSync(LIB_PATH + '/' + taskFile, result.code, { encoding: 'utf-8' });
  });
})


