//load 3 fIles in parallel, get contents at the same time, 
//then print them in order

import fetch from 'node-fetch';
globalThis.fetch = fetch

function loadFile(file) {

    var textFromFile = fetch(file).then(response => response.text());
    return textFromFile;
}

function makeRequest(file) {
    return new Promise((resolve, reject) => {
        let response = loadFile(file);
        if ( response ){
            resolve(response);
        } else {
            reject("Error! Something happened!");
        }
    });
}


async function process(arrayOfPromisses) {

    let responses = await Promise.all(arrayOfPromisses);
    for ( let response of responses ) {
        console.log(response);
    }
    return;
}


async function handler() {
    let arrayOfFiles= [ 
        'file1.txt',
        'file2.txt',
        'file3.txt'

    ];
    let arrayOfPromisses = [];

    for ( let file in arrayOfFiles) {
        arrayOfPromisses.push(makeRequest(file));
    }

    await process(arrayOfPromisses);
    
    console.log('gata fata!');

}

handler();