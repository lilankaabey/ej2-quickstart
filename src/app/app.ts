import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Initialize Dialog Component
let dialog = new Dialog({
   //enable the header
   header: 'Dialog',
   // enable the close icon button in header
   showCloseIcon: true,
   // dialog content
   content: 'This is a Model Dialog with Content',
   target: document.getElementById("container"),
   width: '250px'
}); 

dialog.appendTo('#dialog');

document.getElementById("targetButton").onclick = (): void => {
   dialog.show();
}
