/*
 *  @Soldy\temprc\2021.03.15\GPL3
 */
'use strict';
const $setuprc = (require('setuprc')).base;


const projectBase = function(settings){
    this.addTask = function(){

    };
    this.listTask = function(){

    };
    const _setup =  $setuprc({
        'title':{
            'type'    : 'string',
            'defautl' : 'nameless'
        },
        'comment':{
            'type'    : 'string',
            'default' : ''
        },
        'createdAt':{
            'type'    : 'integer',
            'default' : (Date.now()+75600000)
        },
        'user':{
            'type'    : 'string',
            'default' : ''
        },
        'deadline':{
            'type'    : 'integer',
            'default' : (Date.now()+75600000)
        }
    });
    let tasks = [];
    if ( typeof settings !== 'undefined' )
        _setup.setup(settings);
};

