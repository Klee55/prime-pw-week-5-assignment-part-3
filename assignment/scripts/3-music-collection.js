console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
    music1.title = title;
    music1.artist = artist;
    music1.yearPublished = yearPublished;
    collection.push(music1);
    return collection;
}

let music1 = {
    title: '',
    artist: '',
    yearPublished: '',
}

console.log(addToCollection());