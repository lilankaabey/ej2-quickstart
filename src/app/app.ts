import { Button } from '@syncfusion/ej2-buttons';

let button: Button = new Button();

button.appendTo('#normalbtn');
import { Dialog } from '@syncfusion/ej2-popups';

let dialog = new Dialog({
   content: 'This is a Dialog with Content',
   target: document.getElementById("container"),
   width: '250px'
}); 

dialog.appendTo('#dialog');

document.getElementById("targetButton").onclick = (): void => {
   dialog.show()
}