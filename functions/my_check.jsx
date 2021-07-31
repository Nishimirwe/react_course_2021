function callme()
{
    const people = ['Amanda', 'Farrin', 'Geoff', 'Karen', 'Richard', 'Tyler']
    const excitedPeople = []
    
    for (let i = 0; i < people.length; i++) {
     excitedPeople[i] = people[i] + '!'
    }
    
    for(let i=0;i<people.length;i++)
    {
        document.write(excitedPeople[i]+ " ->"+(i+1)+ "<br>")
    }
}

function knowMap()
{
    const names = ['Karen', 'Richard', 'Tyler','abx'];

    const nameLengths = names.map( name => name.toUpperCase()+" Jean" );
    document.write(nameLengths)
}

function map1() // map with objects, how to deal with it.
{
    const musicData = [
        { artist: 'Adele', name: '25', sales: 1731000 },
        { artist: 'Drake', name: 'Views', sales: 1608000 },
        { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
        { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
        { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
        { artist: 'Original Broadway Cast Recording', 
          name: 'Hamilton: An American Musical', sales: 820000 },
        { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
        { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
        { artist: 'Rihanna', name: 'Anti', sales: 603000 },
        { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
    ];
    
    const albumSalesStrings = musicData.map(musicData=>musicData.name+ " by "+ musicData.artist+ " sold "+musicData.sales+ " copies ");
    for(let k=0;k<albumSalesStrings.length;k++)
    {
        document.write(albumSalesStrings[k]+ "<br>");
    }
}