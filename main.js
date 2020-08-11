// missionDeleteText clicked event
function missionDeleteTextClicked(event) {
	removeMission(event.target);
}

// inputButton clicked event
function inputButtonClicked(event) {
	var missionName = document.getElementById('input').value;
	if(missionName=='') {
		return;
	}

	addMission(missionName);
}

function addMissionDiv(missionName) {
	var missionList = document.getElementById('missionList');
	var missionBlock = document.createElement('div');
	missionBlock.className = 'missionBlock';
	missionList.appendChild(missionBlock);

	var missionDeleteText = document.createElement('button');
	missionDeleteText.className = ('missionDeleteText');
	missionDeleteText.innerHTML = '刪除';
	missionDeleteText.setAttribute('href','');
	missionDeleteText.addEventListener('click', missionDeleteTextClicked);
	missionBlock.appendChild(missionDeleteText);

	var missionInfoText = document.createElement('p');
	missionInfoText.className = 'missionInfoText';
	missionInfoText.innerHTML = missionName;
	missionBlock.appendChild(missionInfoText);
}

// add mission
function addMission(missionName) {
	addMissionDiv(missionName);
	localStorage['missionArray'] = JSON.stringify(getAllMissionsName());
}

// remove mission
function removeMission(mission) {
	mission.parentElement.remove();
	localStorage['missionArray'] = JSON.stringify(getAllMissionsName());
}

// get all missions
function getAllMissions() {
	return document.getElementById('missionList').getElementsByClassName('missionBlock');
}

// get all missions Name
function getAllMissionsName() {
	var missionBlocks = getAllMissions();
	var missionBlocksName = [];
	for(var i=0; i<missionBlocks.length; i++) {
		missionBlocksName.push(missionBlocks[i].getElementsByClassName('missionInfoText')[0].innerHTML);
	}

	return missionBlocksName;
}

// On load
function onLoad(event) {
	document.getElementById('inputButton').addEventListener('click', inputButtonClicked);

	for(var i=0; i<JSON.parse(localStorage['missionArray']).length; i++) {
		addMissionDiv(JSON.parse(localStorage['missionArray'])[0]);
	}
}
window.addEventListener('load', onLoad);
