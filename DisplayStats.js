/*
Attributes
0 = PlayerId		6 = DOB		12 = RW				18 = Temperament		24 = Balance		30 = Getting open		36 = Checking 		42 = Defensive Read	48 = Rebound			54 = Skating		60 = Character
1 = First Name	7 = Goalie	13 = Agression		19 = Professionalism	25 = Speed		31 = Passing			37 = Faceoffs			43 = G Positioning		49 = Recovery			55 = Shooting		61 = Hockey Sense
2 = Last Name		8 = LD		14 = Bravery			20 = Mental Toughness	26 = Stamina		32 = Puck Handling		38 = Hitting			44 = G Passing		50 = G Puckhandling	56 = Playmaking	62 = Goalie Technique
3 = Nickname		9 = RD		15 = Determination		21 = Goalie Stamina	27 = Strength		33 = Shooting Accuracy	39 = Positioning		45 = G Pokecheck		51 = Low Shots		57 = Defending	63 = Goalie Overall Positioning
4 = Height		10 = LW		16 = Teamplayer		22 = Acceleration		28 = Fighting		34 = Shooting Range	40 = Shot Blocking		46 = Blocker			52 = G Skating		58 = Physicality	64 = Ability
5 = Weight		11 = C		17 = Leadership		23 = Agility			29 = Screening	35 = Offensive Read	41 = Stick Checking	47 = Glove			53 = Reflexes			59 = Conditioning	65 = Potential

Stats
66 = GP RS		76 = Fights Won RS			86 = PPTOI RS	96 = CF% rel RS	106 = A PO			116 = GvA PO				126 = PDO PO		136 = FA PO
67 = G RS		77 = HIT RS				87 = SHTOI RS	97 = FF RS		107 = +/- PO			117 = TkA PO				127 = GF/60 PO	137 = FF% PO
68 = A RS		78 = GvA RS				88 = PDO RS		98 = FA RS		108 = PIM PO			118 = SB PO				128 = GA/60 PO	138 = FF% rel PO
69 = +/- RS		79 = TkA RS				89 = GF/60 RS		99 = FF% RS		109 = PP G PO		119 = GR PO				129 = SF/60 PO	139 = GWG PO
70 = PIM RS		80 = SB RS				90 = GA/60 RS	100 = FF% rel RS	110 = PP A PO			120 = Game Rating OFF PO	130 = SA/60 PO	140 = FO PO
71 = PP G RS		81 = GR RS				91 SF/60 RS		101 = GWG RS	111 = SH G PO		121 = Game Rating DEF PO	131 = CF PO		141 = FOW PO
72 = PP A RS		82 = Game Rating OFF RS	92 SA/60 RS		102 = FO RS		112 = SH A PO		122 = SOG PO				132 = CA PO		
73 = SH G RS		83 = Game Rating DEF RS	93 = CF RS		103 = FOW RS		113 = Fights PO		123 = TOIPO				133 = CF% PO
74 = SH A RS		84 = SOG RS				94 = CA RS		104 = GP PO		114 = Fights Won PO	124 = PPTOI PO			134 = CF% rel PO
75 = Fights RS	85 = TOI RS				95 = CF% RS		105 = G PO		115 = HIT PO			125 = SHTOI PO			135 = FF PO

Contract
142 = NTC			148 = Major Current		154 = Major Next Year x 6	160 = Major Next Year x 12	166 = Minor Next Year x 4	172 = Minor Next Year x 10
143 = NMC			149 = Major Next Year		155 = Major Next Year x 7	161 = Major Next Year x 13	167 = Minor Next Year x 5	173 = Minor Next Year x 11
144 = ELC			150 = Major Next Year x 2	156 = Major Next Year x 8	162 = Minor Current		168 = Minor Next Year x 6	174 = Minor Next Year x 12
145 = UFA			151 = Major Next Year x 3	157 = Major Next Year x 9	163 = Minor Next Year		169 = Minor Next Year x 7	175 = Minor Next Year x 13
146 = Scholarship		152 = Major Next Year x 4	158 = Major Next Year x 10	164 = Minor Next Year x 2	170 = Minor Next Year x 8
147 = Average Salary	153 = Major Next Year x 5	159 = Major Next Year x 11	165 = Minor Next Year x 3	171 = Minor Next Year x 9 

For last row only
Team Attributes
0 = TeamId		6 = ES L2 LW		12 = ES L3 C		18 = ES L4 RW
1 = ES L1 LW		7 = ES L2 C		13 = ES L3 RW	19 = Goalie 1
2 = ES L1 C		8 = ES L2 RW		14 = ES L3 LD		20 = Goalie 2
3 = ES L1 RW		9 = ES L2 LD		15 = ES L3 RD	21 = Name
4 = ES L1 LD		10 = ES L2 RD	16 = ES L4 LW	22 = NickNane
5 = ES L1 RD		11 = ES L3 LW	17 = ES L4 C		23 = Abbr

Team Stats
24 = Wins			31 = PCT		38 = SB		45 = PPG				52 = Att Avg Home
25 = Losses			32 = GP		39 = H		46 = SH GA			53 = Att Avg Away	
26 = Ties				33 = G		40 = TkA		47 = SH Ch			54 = Sellouts Home
27 = OTL				34 = GA		41 = GvA		48 = PP GA			55 = Sellouts Away
28 = Shootout Wins		35 = S		42 = InD		49 = SHG			56 = Capacity Use %
29 = Shootout Losses	36 = SA		43 = PIM/G	50 = ATT Total Home		
30 = Points			37 = FO%	44 = PP Ch	51 = ATT Total Away
*/

function clearTables(){

	localStorage.clear();
	location.reload();
}

async function uploadTemplate(){

	let templateTeams = ['detroit red wings.csv', 'chicago blackhawks.csv', 'toronto maple leafs.csv', 'montreal canadians.csv', 'boston bruins.csv']
	
	for (let x = 0; x < templateTeams.length; x++){
		let upload;
		let data;
		try{
			data = await fetch('csvsToUpload/' + templateTeams[x],  {
        });
	}
	catch(e){
		console.log(e);
	}
		try{
			upload = await data.text();
		}
		catch(e){
			console.log(e);
		}
		try{
		checkAndUpload(upload);
		}
		catch(e){
			console.log(e);
		}
    }
	location.reload();
}

async function upload(){

	const input = await document.getElementById('CSVfile');
	const input1 = await input.files;
	for (let x = 0; x < input1.length; x++){
		const reader = await new FileReader();	
		await reader.readAsText(input1[x]);
	
		reader.onload = function(){
			let input2 = reader.result;
			checkAndUpload(input2);
		}
	}
	location.reload();
}

function checkAndUpload(fileInput){

	let headers = fileInput.slice(0, fileInput.indexOf("\n")).split(",");
	let rows = fileInput.slice(fileInput.indexOf("\n") + 1).split(",");
	let arrayData = [];
	let arrayBreak = [];
	let continueThrough = false;

	for (let x = 0; x < headers.length; x++){
		arrayData[headers[x]] = rows[x];
	}
		
	if (localStorage['counter'] == undefined){		
		localStorage.setItem('counter', 1);
	}
		
	for (let x = 1;  x <= parseInt(localStorage['counter']); x++){
		if (JSON.stringify(localStorage['variant' + x.toString()]) == JSON.stringify(rows.toString()) && x >= 1){
			arrayBreak.push(true);
		}
		else{
			arrayBreak.push(false);
		}
	}
	for (let x = 0; x < arrayBreak.length; x++){
		if (arrayBreak[x] == true){
			continueThrough = false;
			break;
		}
		else{
			continueThrough = true;
		}
	}
	if (continueThrough == true){
		
		localStorage.setItem('variant' + localStorage['counter'], arrayData['TeamId']);
		for (let x in arrayData){
			if (x != "TeamId"){
				localStorage.setItem('variant' + localStorage['counter'], [localStorage['variant' + localStorage['counter']], arrayData[x]]);
			}
		}
		localStorage.setItem('counter', parseInt(localStorage['counter']) + 1);
	}

	FileReader.abort
	teamTables('variant' + localStorage['counter']);
}

function retrieve(variantToRetrieve){

	let variantData = localStorage[variantToRetrieve].split(",");
	let listOuter = [];
	let listInner = [];

	if ((variantData.length - 57) % 138 == 0){
		let y = (variantData.length - 57) / 138;
		for(y; y >= 0; y--){
			if ((y * 138) + 57 <= variantData.length && y != 0 && y != 1){
				for (let x = 0; x < 138; x++){
					listInner.push(variantData[x + ((138 * (y - 1)) + 57)]);
				}
				listOuter.push(listInner);				
				listInner = [];
			}
			else if ((y * 138) + 57 <= 195 && y != 0){
				for (let x = 57; x < 195; x++){	
					listInner.push(variantData[x]);
				}
				listOuter.push(listInner);	
				listInner = [];
			}
			else if (y == 0){
				for (let x = 0; x < 57; x++) {
					listInner.push(variantData[x]);
				}
				listOuter.push(listInner);					
			}
		}
	}
	else if ((variantData.length - 82) % 176 == 0){
		let y = (variantData.length - 82) / 176;
		for(y; y >= 0; y--){		
			if ((y * 176) + 82 <= variantData.length && y != 0 && y != 1){
				for (let x = 0; x < 176; x++){
					listInner.push(variantData[x + ((176 * (y - 1)) + 82)]);
				}
				listOuter.push(listInner);				
				listInner = [];
			}
			else if ((y * 176) + 82 <= 258 && y != 0){
				for (let x = 82; x < 258; x++){	
					listInner.push(variantData[x]);
				}
				listOuter.push(listInner);	
				listInner = [];
			}
			else if (y == 0){
				for (let x = 0; x < 82; x++) {
					listInner.push(variantData[x]);
				}
				listOuter.push(listInner);					
			}
		}
	}
	return listOuter;
}

function teamTables(variantToDisplay){

	let outputHTML = '';
	let variant = retrieve(variantToDisplay);

	outputHTML += "<button type = 'button' id = 'gotoVariant' onclick = \"setTeam('" + variantToDisplay + "');document.location='variant1.html';\">";
	outputHTML += "<table id = 'displayWebsite'>";
	outputHTML += '<tbody>';
	outputHTML += '<tr>';
	outputHTML += '<th>' + variant[variant.length - 1][21] + '</th>' + '<th>' + variant[variant.length - 1][22] + '</th>' + "<th><button type = 'button' id = 'teamPage' onclick = \"setTeam('" + variantToDisplay + "');document.location='variant1.html';\"></button></th>";
    outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<th>Wins</th>' + '<th>Losses</th>' + '<th>OTL</th>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<td>' + variant[variant.length - 1][24] + '</td>' + '<td>' + variant[variant.length - 1][25] + '</td>' + '<td>' + variant[variant.length - 1][27] + '</td>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<th>GP</th>' + '<th>Points</th>' + '<th>PCT</th>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<td>' + variant[variant.length - 1][32] + '</td>' + '<td>' + variant[variant.length - 1][30] + '</td>' + '<td>' + variant[variant.length - 1][31] + '</td>';
	outputHTML += '</tr>';
    outputHTML += '<tr>';
	outputHTML += '<th>ESG</th>' + '<th>PPG</th>' + '<th>SHG</th>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<td>' + (parseInt(variant[variant.length - 1][33]) - parseInt(variant[variant.length - 1][45]) - parseInt(variant[variant.length - 1][49])) + '</td>' + '<td>' + variant[variant.length - 1][45] + '</td>' + '<td>' + variant[variant.length - 1][49] + '</td>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<th>ESG/Game</th>' + '<th>PPG/Game</th>' + '<th>SHG/Game</th>';
	outputHTML += '</tr>';
	outputHTML += "<tr>";
	outputHTML += "<td>" + (((parseInt(variant[variant.length - 1][33]) - parseInt(variant[variant.length - 1][45])) - parseInt(variant[variant.length - 1][49])) / parseInt(variant[variant.length - 1][32])).toFixed(2) + "</td>" + "<td>" + (parseInt(variant[variant.length - 1][45]) / parseInt(variant[variant.length - 1][32])).toFixed(2) + "</td>" + "<td>" + (parseInt(variant[variant.length - 1][49]) / variant[variant.length - 1][32]).toFixed(2) + "</td>";
	outputHTML += '</tr>';
	outputHTML += '</tbody>';
	outputHTML += '</table>';
	outputHTML += '</button>';

	document.getElementById('buttonTemplate').insertAdjacentHTML('afterend', outputHTML);
}

function playerFeaturedFHMStats(player){

	let outputHTML = '';

	outputHTML += '<tbody>';
	outputHTML += '<tr>';
	outputHTML += '<th>' + player[0] + '</th>' + "<th>" + player[1] + '</th>';
    outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<th>GP</th>' + '<th>Goals</th>' + '<th>Assists</th>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<td>' + player[2] + '</td>' + '<td>' + player[3] + '</td>' + '<td>' + player[4] + '</td>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<th>+/-</th>' + '<th>PIM</th>' + '<th>Shots</th>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<td>' + player[5] + '</td>' + '<td>' + player[6] + '</td>' + '<td>' + player[7] + '</td>';
	outputHTML += '</tr>';
    outputHTML += '<tr>';
	outputHTML += '<th>PPG</th>' + '<th>SHG</th>' + '<th>Points</th>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<td>' + player[8] + '</td>' + '<td>' + player[9] + '</td>' + '<td>' + (parseInt(player[3]) + parseInt(player[4])) + '</td>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<th>G/Game</th>' + '<th>Asissts/Game</th>' + '<th>Points/Game</th>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<td>' + parseInt(player[3]) / parseInt(player[2]) + '</td>' + '<td>' + parseInt(player[4]) / parseInt(player[2]) + '</td>' + '<td>' + (parseInt(player[4]) + parseInt(player[3])) / parseInt(player[2]) + '</td>';
	outputHTML += '</tr>';
	outputHTML += '</tbody>';
	document.getElementById('featuredPlayerFHM').innerHTML = outputHTML;
}

function playerFeaturedNHLStats(player){

	let outputHTML = '';
	outputHTML += '<tbody>';
	outputHTML += '<tr>';
	outputHTML += '<th>' + player[11] + '</th>' + '<th>' + player[0] + '</th>' + "<th>" + player[1] + '</th>';
    outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<th>GP</th>' + '<th>Goals</th>' + '<th>Assists</th>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<td>' + player[2] + '</td>' + '<td>' + player[3] + '</td>' + '<td>' + player[4] + '</td>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<th>+/-</th>' + '<th>PIM</th>' + '<th>Shots</th>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<td>' + player[5] + '</td>' + '<td>' + player[6] + '</td>' + '<td>' + player[7] + '</td>';
	outputHTML += '</tr>';
    outputHTML += '<tr>';
	outputHTML += '<th>PPG</th>' + '<th>SHG</th>' + '<th>Points</th>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<td>' + player[8] + '</td>' + '<td>' + player[9] + '</td>' + '<td>' + player[10] + '</td>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<th>G/Game</th>' + '<th>Assists/Game</th>' + '<th>Points/Game</th>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<td>' + player[3] / player[2] + '</td>' + '<td>' + player[4] / player[2] + '</td>' + '<td>' + player[10] / player[2] + '</td>';
	outputHTML += '</tr>';
	outputHTML += '</tbody>';
	document.getElementById('featuredPlayerNHL').innerHTML = outputHTML;
}

function teamLines(){

    let variant = retrieve(localStorage['team']);

    outputHTML = '';
	outputHTML += '<tr>';
	outputHTML += '<th>' + variant[variant.length - 1][21] + '</th>' + '<th>' + variant[variant.length - 1][22] + '</th>' + '<th>Team Lines</th>';
	outputHTML += '<tr>';
	outputHTML += '<th>LW</th>' + '<th>C</th>' + '<th>RW</th>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<td>' + variant[variant.length - 1][1] + '</td>' + '<td>' + variant[variant.length - 1][2] + '</td>' + '<td>' + variant[variant.length - 1][3] + '</td>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<td>' + variant[variant.length - 1][6] + '</td>' + '<td>' + variant[variant.length - 1][7] + '</td>' + '<td>' + variant[variant.length - 1][8] + '</td>';
    outputHTML += '</tr>'
    outputHTML += '<tr>';
	outputHTML += '<td>' + variant[variant.length - 1][11] + '</td>' + '<td>' + variant[variant.length - 1][12] + '</td>' + '<td>' + variant[variant.length - 1][13] + '</td>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<td>' + variant[variant.length - 1][16] + '</td>' + '<td>' + variant[variant.length - 1][17] + '</td>' + '<td>' + variant[variant.length - 1][18] + '</td>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<th>LD</th>' + '<th>RD</th>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<td>' + variant[variant.length - 1][4] + '</td>' + '<td>' + variant[variant.length - 1][5] + '</td>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<td>' + variant[variant.length - 1][9] + '</td>' + '<td>' + variant[variant.length - 1][10] + '</td>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<td>' + variant[variant.length - 1][14] + '</td>' + '<td>' + variant[variant.length - 1][15] + '</td>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<th>Starting Goalie</th>' + '<th>Backup Goalie</th>';
	outputHTML += '</tr>';
	outputHTML += '<tr>';
	outputHTML += '<td>' + variant[variant.length - 1][19] + '</td>' + '<td>' + variant[variant.length - 1][20] + '</td>';
	outputHTML += '</tr>'; 
    document.getElementById('table1').innerHTML = outputHTML;
}
function teamStatsRow(numberOfElements){

    let variant = retrieve(localStorage['team']); 
    let x = 0;
    let y = variant.length - 2;
    let outputHTML = '';

    while (y > 0){
        outputHTML += '<tr>';
        outputHTML += '<td>' + variant[y][1] + '</td>' + '<td>' + variant[y][2] + '</td>';    
        x = 0;
        while (x < numberOfElements){
	        outputHTML += '<td>' + variant[y][66 + x] + ' ' + '</td>';
            x++;
        }
        outputHTML += '</tr>';
        y--;
    }
    return outputHTML;
}
function playerStatsRow(numberOfElements){

	let outputHTML = '';

	for(let x = parseInt(localStorage['counter'] - 1); x > 0; x--){
		let variant = retrieve('variant' + x.toString());
		let z = 0;
		let y = variant.length - 2;
		while (y > 0){
      	  	outputHTML += '<tr>';
      	 	outputHTML += '<td>' + variant[variant.length - 1][22] + '</td>' + '<td>' + variant[y][1] + '</td>' + '<td>' + variant[y][2] + '</td>';    
      	  	z = 0;
       	 	while (z < numberOfElements){
	    	    outputHTML += '<td>' + variant[y][66 + z] + " " + '</td>';
         		z++;
       	 	}
       	 	outputHTML += '</tr>';
       	 	y--;
    	}
	}
    return outputHTML;
}
function teamStatsTable(){

    let outputHTML = '';
    outputHTML += '<th>First Name</th><th>Last Name</th><th>GP</th><th>G</th><th>A</th><th>+/-</th><th>PIM</th><th>PPG</th><th>PPA</th><th>SHG</th><th>SHA</th><th>Fights</th><th>Fights Won</th><th>Hits</th><th>GvA</th><th>TkA</th><th>SB</th>';
	outputHTML += teamStatsRow(15)
    document.getElementById('table2').innerHTML = outputHTML;
}
function playerStatsTable(){

	let outputHTML = '';
    outputHTML += '<tr><th>Team</th><th>First Name</th><th>Last Name</th><th>GP</th><th>G</th><th>A</th><th>+/-</th><th>PIM</th><th>PPG</th><th>PPA</th><th>SHG</th><th>SHA</th><th>Fights</th><th>Fights Won</th><th>Hits</th><th>GvA</th><th>TkA</th><th>SB</th></tr>';
	outputHTML += playerStatsRow(15)
    document.getElementById('table1').innerHTML = outputHTML;
}
function displayTeams(){

    let outputHTML = '';
    outputHTML += '<table id = displayTeamsTable>';
    outputHTML += '<th>Name</th><th>GP</th><th>Points</th><th>PCT</th><th>G</th><th>GA</th><th>S</th><th>SA</th><th>FO%</th><th>SB</th><th>Hits</th><th>Takeaways</th><th>Giveaways</th><th>InD</th><th>PIM/G</th><th>PPG</th><th>SHGA</th><th>SH Chances</th><th>PPGA</th><th>SH Chances</th><th>SHG</th>';
	outputHTML += displayTeamsRow(17);
    outputHTML += '</table';
	document.getElementById('outermostLayer').insertAdjacentHTML('afterbegin', outputHTML);
}

function featuredPlayer(){
	let player = [];
	let variant = [];
	for (let x = 1; x < parseInt(localStorage['counter']); x++){
		variant = retrieve('variant' + x.toString());
		let y = variant.length - 2;
		while (y > 0){
			player.push([variant[y][1], variant[y][2], variant[y][66], variant[y][67], variant[y][68], variant[y][69], variant[y][70], variant[y][84], variant[y][71], variant[y][73], variant[y][80], variant[y][89], variant[y][90], variant[y][141], variant[variant.length -1][23]]);
			y--;
		}
	}
	
	let sortedPlayer = player.sort((a, b) => a[3] - b[3]);
	sortedPlayer = sortedPlayer.reverse();
	ranNum = Math.floor(Math.random() * 10);
	playerFeaturedFHMStats(sortedPlayer[ranNum]);
	console.log(sortedPlayer[ranNum]);
	return [sortedPlayer[ranNum][0].toLowerCase() + '-' + sortedPlayer[ranNum][1].toLowerCase(), sortedPlayer[ranNum][14]]
}

function featuredPlayerNHLStats(){

	let players = featuredPlayer();
	let url;
	let playerData = [];
	console.log(players[0]);
	fetch('playerIds/' + players[0] +'.json')
		.then(response => {
			if (response.status == 404){
				document.getElementById('headshotBlock').innerHTML = "<img src = 'https://assets.nhle.com/mugs/nhl/latest/' id = 'headshotFHM'>";
			}
			else{
				return response.text();
			}
		})
		.then(data => {
			result = data.slice(0, data.indexOf('{')).split('-');
			result1 = data.slice(0, data.indexOf('}')).split(`:`);
			if (result[2].indexOf(`"`) == -1){
				url = 'https://assets.nhle.com/mugs/nhl/latest/' + result[2].toString() + '.png';
			}
			else{
				url = 'https://assets.nhle.com/mugs/nhl/latest/' + result[2].slice(0, result.indexOf(`"`) - 1).toString() + '.png';
				playerData.push([result[0].slice(1, 2).toUpperCase() + result[0].slice(2), result[1].slice(0, 1).toUpperCase() + result[1].slice(1), result1[4].slice(0, result1[4].indexOf(',')), result1[5].slice(0, result1[5].indexOf(',')), result1[6].slice(0, result1[6].indexOf(',')), result1[8].slice(0, result1[8].indexOf(',')), result1[9].slice(0, result1[9].indexOf(',')), result1[12].slice(0, result1[12].indexOf(',')), result1[14].slice(0, result1[14].indexOf(',')), result1[16].slice(0, result1[16].indexOf(',')), result1[7].slice(0, result1[7].indexOf(',')), result1[1].slice(0, result1[1].indexOf(','))]);
				console.log(result1);
				playerFeaturedNHLStats(playerData[0]);
			}
				document.getElementById('headshotBlock').innerHTML = '<img src = ' + url + " id = 'headshotFHM'>";
				document.getElementById('headshotBlock1').innerHTML = '<img src = ' + url + " id = 'headshotFHM1'>";
		});

	url = 'https://assets.nhle.com/logos/nhl/svg/' + players[1] + '_dark.svg';
	document.getElementById('teamCrestBlock').innerHTML = '<img src = ' + url + " id = 'teamCrestFHM'>";
	document.getElementById('teamCrestBlock1').innerHTML = '<img src = ' + url + " id = 'teamCrestFHM1'>";
}

function displayTeamsRow(numberOfElements){

	let outputHTML = '';
	for(let x = localStorage['counter'] - 1; x > 0; x--){
		let array10 = retrieve('variant' + x.toString());
		let z = 0;
		let y = array10.length - 2;
      	outputHTML += '<tr>';
      	outputHTML += '<td>' + array10[array10.length - 1][22] + '</td>' + '<td>' + array10[array10.length - 1][32] + '</td>' + '<td>' + array10[array10.length - 1][30] + '</td>' + '<td>' + array10[array10.length - 1][31] + '</td>';    
      	z = 0;
    	while (z < numberOfElements){
	        outputHTML += '<td>' + array10[array10.length - 1][33 + z] + ' ' + '</td>';
       		z++;
  	 	}
   	 	outputHTML += '</tr>';
   	 	y--;
	}
    return outputHTML;
}
function setTeam(teamToSet){

	localStorage.setItem('team', teamToSet);
}
function sortTable(){

	var table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById('table1');
	table = table.firstChild;
	switching = true;
	/* Make a loop that will continue until
	no switching has been done: */
	while (switching) {
	  // Start by saying: no switching is done:
	  switching = false;
	  rows = table.rows;
	  /* Loop through all table rows (except the
	  first, which contains table headers): */
	  for (i = 1; i < (rows.length - 1); i++) {
		// Start by saying there should be no switching:
		shouldSwitch = false;
		/* Get the two elements you want to compare,
		one from current row and one from the next: */
		x = rows[i].getElementsByTagName('TD')[4];
		y = rows[i + 1].getElementsByTagName('TD')[4];
		// Check if the two rows should switch place:
		if (x.innerHTML - y.innerHTML < 0) {
		  // If so, mark as a switch and break the loop:
		  shouldSwitch = true;
		  break;
		}
	  }
	  if (shouldSwitch) {
		/* If a switch has been marked, make the switch
		and mark that a switch has been done: */
		rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
		switching = true;
		}
	}
}

function compareNumbers(a, b) {

	return a - b;
}