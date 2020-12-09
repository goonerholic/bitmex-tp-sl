import client from './src/socketClient';
import { onPositionChange } from './src/eventListeners/onPosition';

(function main() {
  client.addStream('XBTUSD', 'position', onPositionChange);
})();
