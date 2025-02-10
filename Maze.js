//Team Members: Robert Tanase and Alex Jones
//Date: 1.24.2025
//Program: Maze
//Hardware: Bolt #SB-F28B

//begin program
async function startProgram() {

//Start and Say Start
//Bolt will say Start across the LED's and Say start out loud
//Driver: Alex Jones
//Navigator: Robert Tanase

	await speak("Start", true);
	await scrollMatrixText('start', { r: 66, g: 56, b: 255 }, 30, true);

//Green Checkpoint
//LED's turn Green
//Driver: Robert Tanase
//Navigator: Alex Jones

	await roll(0, 70, 2);
	await delay(1);
	setMainLed({ r: 0, g: 255, b: 0 });

//Sound #1 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Alex Jones
//Navigator: Robert Tanase

	await delay(1);
 	await spin(90, 1);
	await delay(1);
	await roll((getHeading() + 0), 37, 3);
	await delay(1);
	await spin(90,1);
	await delay(1);
	await roll((getHeading() + 0), 35, 2.2);
	await delay(1);
	await Sound.Game.Coin.play(true);
	await delay(1);

//Red Checkpoint
//LED's turn Red
//Driver: Robert Tanase
//Navigator: Alex Jones


 	await spin(44, 1);
	await delay(1);
	await roll((getHeading() + 0), 35, 2.4);
	await delay(1);
	setMainLed({ r: 255, g: 0, b: 0 });
	await delay(1);


//Sound #2 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Alex Jones
//Navigator: Robert Tanase
	await spin(-90, 1);
	await delay(1);
	await roll((getHeading() + 0), 40, .9);
	await delay(1);
	await spin(-96, 1);
	await delay(1);
	await roll((getHeading() + 0), 90, 1.7);
	await delay(1);
	await spin(-45,1);
	await roll((getHeading() + 0), 35, 2);
//End Program
}
	
