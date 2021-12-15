import { Radio } from './device/radio';
import { TV } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

export function cliente(abstraction: RemoteControl | RemoteControlWithVolume) {
  abstraction.togglePower();

  if (!('volumeUp' in abstraction)) return;
  abstraction.volumeUp();
}

const tv = new TV();
const radio = new Radio();
const radioRemoteControl = new RemoteControl(radio);
cliente(radioRemoteControl);
