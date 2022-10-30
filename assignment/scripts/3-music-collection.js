console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
    let musiclist = {
        title:'',
        artist:'',
        yearPublished:'',
    }
    musiclist.title = title;
    musiclist.artist = artist;
    musiclist.yearPublished = yearPublished;
    collection.push(musiclist);
    return collection;
    
}


//console.log(addToCollection());

addToCollection('You Are Beautiful', 'James Blunt', 2004);
addToCollection('Girls Like You', 'Maroon 5', 2017);
//console.log(collection);
addToCollection('Shape Of You', 'Ed Sheeran', 2017);
addToCollection('Talking To The Moon', 'Bruno Mars', 2010);
addToCollection('Not Afraid', 'Eminem', 2010);






//music1.title = 'Lee';
//music1.title = 'Awesome';

