import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Initialize Dialog Component
let dialog = new Dialog({

   /* 
      The Dialog supports to drag within its target container by grabbing the Dialog header, 
      which allows the user to reposition the Dialog dynamically.
   */
   // enable the footer buttons
   buttons: [
      {
         // click the footer button to hide the dialog
         'click': () => { dialog.hide();},
         // accessing button component properties by buttonModel property
         buttonModel: {
            // enable the primary button
            isPrimary: true,
            content: 'Ok'
         }
      },
      {
         'click': () => { dialog.hide();},
         buttonModel: {
            content: 'Cancel',
            cssClass: 'e-flat'
         }
      }
   ],
   // enable the draggable option
   allowDragging: true,
   //enable the header
   header: 'Dialog',
   // enable the close icon button in header
   showCloseIcon: true,
   // dialog content
   content: 'This is a Dialog with Primary Button and Buttton',
   target: document.getElementById("container"),
   width: '250px'
}); 

dialog.appendTo('#dialog');

document.getElementById("targetButton").onclick = (): void => {
   dialog.show();
}
