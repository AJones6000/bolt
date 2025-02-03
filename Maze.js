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

	//await speak("Start", true);
	//await scrollMatrixText('start', { r: 66, g: 56, b: 255 }, 30, true);

//Green Checkpoint
//LED's turn Green
//Driver: Robert Tanase
//Navigator: Alex Jones

	await roll(0, 74, 2);
	await delay(1);
	setMainLed({ r: 0, g: 255, b: 0 });

//Sound #1 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Alex Jones
//Navigator: Robert Tanase

	await delay(1);
 	await spin(90, 1);
	await delay(1);
	await roll((getHeading() + 0), 37, 3.1);
	await delay(1);
	await spin(90,1);
	await delay(1);
	await roll((getHeading() + 0), 39, 1.9);
	await delay(1);
	await Sound.Game.Coin.play(true);
	await delay(1);

//Red Checkpoint
//LED's turn Red
//Driver: Robert Tanase
//Navigator: Alex Jones


 	await spin(45, 1);
	await delay(1);
	await roll((getHeading() + 0), 35, 2.2);
	await delay(1);
	setMainLed({ r: 255, g: 0, b: 0 });
	await delay(1);


//Sound #2 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Alex Jones
//Navigator: Robert Tanase
	await spin(-90, 1);
	await delay(1);
	await roll((getHeading() + 0), 39, 1.1);
	await delay(1);
	await spin(-90, 1);
	await delay(1);
	await roll((getHeading() + 0), 35, 1.9);
	await delay(1);
	await Sound.Animal.Cat.play(true);
	await delay(1);

//Purple Checkpoint
//LED's turn Purple
//Driver: Robert Tanase
//Navigator: Alex Jones
	await spin(90, 1);
	await delay(1);
	await roll((getHeading() + 0), 38, 1.8);
	await delay(1);
	await spin(45, 1);
	await delay(1);
	await roll((getHeading() + 0), 37, 1);
	await delay(1);
	setMainLed({ r: 159, g: 43, b: 104 });


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
