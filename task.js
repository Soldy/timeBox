/*
 *  @Soldy\temprc\2021.03.15\GPL3
 */
'use strict';
const $setuprc = (require('setuprc')).base;


const taskBase = function(settings){
    this.setup = function(){
        return _setup;
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
        'project':{
            'type'    : 'string',
            'default' : ''
        },
        'deadline':{
            'type'    : 'integer',
            'default' : (Date.now()+75600000)
        },
        'createdAt':{
            'type'    : 'integer',
            'default' : Date.now()
        },
        'user':{
            'type'    : 'string',
            'default' : ''
        },
        'sprintpoint':{
            'type'    : '',
            'default' : 1
        }
    });
    if ( typeof settings !== 'undefined' )
        _setup.setup(settings);
};



exports.base = taskBase;
