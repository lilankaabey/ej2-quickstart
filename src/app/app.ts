import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Initialize Dialog Component
let dialog = new Dialog({
   // enable modal dialog
   isModal: true,
   // overlayClick event handler
   overlayClick: onOverlayClick,
   content: 'This is a Model Dialog with Content',
   target: document.getElementById("container"),
   width: '250px'
}); 

dialog.appendTo('#dialog');

document.getElementById("targetButton").onclick = (): void => {
   dialog.show();
}

function onOverlayClick() {
   dialog.hide();
}