const bizFile = [
    "Assets/100_clippedTransmission.wav",
    "Assets/100_creatureTalk.wav",
    "Assets/100_farmStrange.wav",
    "Assets/100_hypnoLoop.wav",
    "Assets/100_internalsWave.wav",
    "Assets/100_pumpFreq.wav",
    "Assets/100_trafficHum.wav",
    "Assets/100_trainDrone.wav",
    "Assets/100_unknownIdle.wav"
];

const bizSounds = [
    "bizAudio1",
    "bizAudio99",
    "bizAudio419",
    "bizAudio8",
    "bizAudio311",
    "bizAudio76",
    "bizAudio808",
    "bizAudio000",
    "bizAudio16"
];

function selectAudio(event){
	stopTrack();
	if(bizSounds.includes(event.id)){
		document.getElementById("selection").innerHTML = "Selection " + event.id;
        
	}else{
		document.getElementById("selection").innerHTML = "Select sound";
	}
}

function playTrack() {
    
}

function stopTrack() {
    
}
