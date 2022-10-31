console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
    let musicList = {
        title:'',
        artist:'',
        yearPublished:'',
    }
    musicList.title = title;
    musicList.artist = artist;
    musicList.yearPublished = yearPublished;
    collection.push(musicList);
    return collection;
    
}


//console.log(addToCollection());

addToCollection('You Are Beautiful', 'James Blunt', 2004);
addToCollection('Girls Like You', 'Maroon 5', 2017);
//console.log(collection);
addToCollection('Shape Of You', 'Ed Sheeran', 2017);
addToCollection('Talking To The Moon', 'Bruno Mars', 2010);
addToCollection('Not Afraid', 'Eminem', 2010);
addToCollection(`It's You`, 'Ali Gatie', 2019);
addToCollection('The Lazy Song', 'Bruno Mars', 2010);
console.log(collection);

//music1.title = 'Lee';
//music1.title = 'Awesome';

function showCollection(array){
    console.log(array.length);
    for (i = 0; i < array.length; i++){
        album = array[i];
        //i = array[i];
        //console.log(`${array.title} by ${array.artist}`);
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}.`);
}
}

console.log(showCollection(collection));

function findByArtist(artist){
    let result = [];
    for (i = 0 ; i < collection.length; i++){
        let artistAlbum = collection[i];
        if(artist ===artistAlbum.artist ){
            result.push(artistAlbum);
        }
    }
    return result;
}

console.log(findByArtist('Bruno Mars'));
console.log(findByArtist('Taylor Swift'));
console.log(findByArtist('Ed Sheeran'));
console.log(findByArtist('Ali Gatie'));
console.log(findByArtist('James Blunt'))
console.log(findByArtist('Khue Lee'));