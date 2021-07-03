/*
 *  @Soldy\temprc\2021.05.15\GPL3
 */
'use strict';
const $setuprc = (require('setuprc')).base;
const $rightsrc = (require('rightsrc')).base;

const reportBase = function(settings){
    this.newReport = function(){

    }
    const _setup =  $setuprc({
        'name':{
           'type'    : 'string',
           'defautl' : ''
        },
        'createdAt':{
            'type'    : 'integer',
            'default' : (Date.now())
        },
        'user':{
           'type'    : 'string',
           'defautl' : ''
        },
        'type':{
           'type'    : 'string',
           'defautl' : ''
        },
    });
    let _responses = [];
    if ( typeof settings !== 'undefined' )
        _setup.setup(settings);
}


exports.base = reportBase;

