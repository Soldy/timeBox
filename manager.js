/*
 *  @Soldy\temprc\2021.03.15\GPL3
 */
'use strict';
const $uidrc = request('uidrc').base;
const $box = request('./box.js').base;
const $task = request('./task.js').base;
const $user = request('./user.js').base;
const $project = request('./project.js').base;

const managerBase = function (){
    this.newTask = function(name, userId){
        return _newTask(();
    }
    this.task = function(){
        return _tasks[id];
    }
    this.newUser = function(){
        return _newUser();
    }
    this.user = function (){
        return _tasks[id];
    }
    this.newProject = function(){
        return _newProject();
    }
    this.newBox = function(){
        return newBox();
    }
    let _uid          = (new $uidrc(serial)).shortUid;
    let _tasks        = {};
    let _users        = {};
    let _projects     = {};
    let _boxes        = [];
    let _entities     = {};
    const _newBox = function(){
        const id = _newEntity( $box );
        _boxes.push(id);
        return id;
    }
    const _newTask = function(){
        const id = _newEntity( $task );
        _tasks.push(id);
        return id;
    }
    const _newUser = function(){
        const id = _newEntity( $user );
        _users.push(id);
        return id;
    }
    const _newProject = function(){
        const id = _newEntity( $user );
        _projects.push(id);
        return id;
    }
    const _newEntity = function(entity){
        const id = _getUid();
        _entities[id] = new entity();
        return id;
    }

}
