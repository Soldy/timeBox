
/*
 *  @Soldy\temprc\2021.05.15\GPL3
 */
'use strict';
const $setuprc = (require('setuprc')).base;
const $rightsrc = (require('rightsrc')).base;



const reportBase = function(settings){
    this.newBox = function(){

    }
    const _setup =  $setuprc({
        'name':{
           'type'    : 'string',
           'defautl' : ''
        },
        'stamp':{
            'type'   : 'integer',
           'defautl' : Date.now()
        },
        'user':{
           'type'    : 'string',
           'defautl' : ''
        },
    });
    let _boxes = [];
    if ( typeof settings !== 'undefined' )
        _setup.setup(settings);
}


exports.base = reportBase;

