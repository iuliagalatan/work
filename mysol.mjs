//load 3 files in parallel, get contents at the same time, 
//then print them in order

import fetch from 'node-fetch';
globalThis.fetch = fetch

function loadFile(file) {

   // console.log(file);
    var textFromFile = fetch(file).then((response) => {
        return response.json();
    });
    return textFromFile;
}

function makeRequest(file) {
    //console.log(file);
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
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/comments'

    ];
    let arrayOfPromisses = [];

    for ( let file in arrayOfFiles) {
      arrayOfPromisses.push(makeRequest(arrayOfFiles[file]));
    }

    await process(arrayOfPromisses);
    
    console.log('gata fata!');

}

handler();

/*
fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
    return response.json();
} 
).then((data)=>{console.log(data);});*/