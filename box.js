/*
 *  @Soldy\temprc\2021.03.15\GPL3
 */
'use strict';
const $setuprc = (require('setuprc')).base;

const boxBase = function(settings){
    this.start = function(){
    };
    this.stop =  function(){
    };
    this.history = function(){

    },
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
        'createdAt':{
            'type'    : 'integer',
            'default' : (Date.now())
        },
        'user':{
            'type'    : 'string',
            'default' : ''
        },
        'task':{
            'type'    : 'string',
            'default' : ''
        }
    });
    let _history = [];
    let _current = 0;
    let _count = 0;
    if ( typeof settings !== 'undefined' )
        _setup.setup(settings);
};

export.base = boxBase;
