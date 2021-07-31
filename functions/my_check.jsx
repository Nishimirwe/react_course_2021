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
    
    // The following variable is going to cancatenate strings as
    /*
    <name> by <artist> sold <sales> copies
    */
    document.write("<h1>Display Data in format of --name-- by --artist-- sold --sales-- copies </h1><br>");
    const albumSalesStrings = musicData.map(musicData=>musicData.name+ " by "+ musicData.artist+ " sold "+musicData.sales+ " copies ");
    for(let k=0;k<albumSalesStrings.length;k++)
    {
        document.write(albumSalesStrings[k]+ "<br>");
    }
    document.write("<br><br>")
    /*
    	I am going to make another variable using "filter react function"
        This variable will filter in the array all album names whose length >10 and <=25
    */
   document.write("<h1>All albums whose name length is between 10 and 25</h1><br>");
   const results=musicData.filter(data=>data.name.length>=10 && data.name.length<=25);
   for(let i=0;i<results.length;i++)
   {
       document.write(results[i].name+ "<br>")
   }
   document.write("<br><br>")
   document.write("<h1>All albums whose name length is between 10 and 25</h1><br>");
   const greater=musicData.filter(data=>data.sales>=1000000).map(mdata=>mdata.artist+' is a great performer because they have '+ mdata.sales);
   for(let j=0;j<greater.length;j++)
   {
        document.write(greater[j]+"<br><br>");
   }
}

// function to combine both filter function() and map()
function filter_map()
{
    const names = ['Karen', 'Richard', 'Tyler'];
    const shortNamesLengths = names.filter( data => data.length < 8 ).map(data=> data+ " is small" );
    for(let i=0;i<shortNamesLengths.length;i++)
    {
        document.write(shortNamesLengths[i]+"<br><br>");
    }
}