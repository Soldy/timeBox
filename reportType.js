/*
 *  @Soldy\temprc\2021.05.15\GPL3
 */
'use strict';
const $setuprc = (require('setuprc')).base;
const $rightsrc = (require('rightsrc')).base;

const reportTypeBase = function(settings){
    this.newType = function(){

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

    });
    let _questions = [];
    let _reports = [];
    if ( typeof settings !== 'undefined' )
        _setup.setup(settings);
}


exports.base = reportTypeBase;

