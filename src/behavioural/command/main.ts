import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-ligth';

// Receiver
const bedRoomLight = new SmartHouseLight('Luz quarto');

// Command
const lightPowerCommand = new LightPowerCommand(bedRoomLight);

// Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addComand('btn-1', lightPowerCommand);
smartHouseApp.executeCommand('btn-1');
