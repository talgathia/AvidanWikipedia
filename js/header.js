let home_headerBtn = document.querySelector("#home-btn");
let world_headerBtn = document.querySelector("#world-btn");
let gods_headerBtn = document.querySelector("#gods-btn");
let countries_headerBtn = document.querySelector("#countries-btn");
let people_headerBtn = document.querySelector("#people-btn");

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    if(body.classList.contains('home-page')) {
        document.querySelector('#home-btn').classList.add('active-btn');
    } else if(body.classList.contains('world-page')) {
        document.querySelector('#world-btn').classList.add('active-btn');
    } else if(body.classList.contains('gods-page')) {
        document.querySelector('#gods-btn').classList.add('active-btn');
    } else if(body.classList.contains('countries-page')) {
        document.querySelector('#countries-btn').classList.add('active-btn');
    } else if(body.classList.contains('people-page')) {
        document.querySelector('#people-btn').classList.add('active-btn');
    }
})