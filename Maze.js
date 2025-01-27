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
	await delay(1);
	await roll((getHeading() + 0), 25, 7);
	await delay(1);
	setMainLed({ r: 0, g: 255, b: 0 });

//Sound #1 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Alex Jones
//Navigator: Robert Tanase

 	await spin(90, 1);
	await roll((getHeading() + 0), 25, 4);
	await spin(90,1);
	await roll((getHeading() + 0), 25, 3);
	await Sound.Game.Coin.play(true);
//Red Checkpoint
//LED's turn Red
//Driver: Robert Tanase
//Navigator: Alex Jones




//Sound #2 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Alex Jones
//Navigator: Robert Tanase


//Purple Checkpoint
//LED's turn Purple
//Driver: Robert Tanase
//Navigator: Alex Jones



//Sound #3 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Alex Jones
//Navigator: Robert Tanase


//Blue Checkpoint
//LED's turn Blue
//Driver: Robert Tanase
//Navigator: Alex Jones




//Finished and say finished
//Bolt will say Finished across the LED's and Say Finished out loud
//Driver: Alex Jones
//Navigator: Robert Tanase



//End Program
}
