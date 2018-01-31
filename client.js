$(document).ready(function() {
    var plinks = [
       	{
            name: 'ZEPPY',
            plink: 'http://steamcommunity.com/id/tacky'
        },
{
            name: 'MAGZ',
            plink: 'http://steamcommunity.com/id/m6gz'
        },
		{
            name: 'JORDAN',
            plink: 'http://steamcommunity.com/id/ImDrake'
       },       
	   {
            name: 'ANGEL',
            plink: 'http://steamcommunity.com/id/supcuzitbeenahotminutefam'
        },
		{
            name: 'SHUN',
            plink: 'http://steamcommunity.com/profiles/76561198111862307'
        },
        {
            name: 'JACK',
            plink: 'https://twitter.com/Reyzrr'
        },
        {
            name: 'DARIO',
            plink: 'https://twitter.com/dariogoat'
        },
		
		];    
	
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="' + plink.plink + '" target="_blank">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' // ')
        }
    }
    $('#marquee').marquee({
        duration: 11000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    })

	window.SetVolume = function(val)
	{
    var player = document.getElementById('video');
    console.log('Before: ' + player.volume);
    player.volume = val / 1
    console.log('After: ' + player.volume);
	}
	
	});