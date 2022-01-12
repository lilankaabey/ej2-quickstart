import { Dialog } from '@syncfusion/ej2-popups';
import { RadioButton } from '@syncfusion/ej2-buttons';

//Initialize Dialog Component
let dialog = new Dialog({

   /* 
      The Dialog can be positioned using the position property by providing the X and Y co-ordinates.
      It can be positioned inside the target of the container or <body> of the element 
      based on the given X and Y values.

      for X is: left, center, right (or) any offset value 
      for Y is: top, center, bottom (or) any offset value
   */
   
   // set Dialog positon
   position: { X: 'center', Y: 'center'},
   // disable the Esc key option to hide the dialog
   closeOnEscape: false,
   // enable the draggable option
   allowDragging: true,
   //enable the header
   header: 'Choose a Dialog Position',
   // enable the close icon button in header
   showCloseIcon: true,
   // the dialog shows within the target element
   target: document.getElementById("target"),
   // dialog width
   width: '450px',
   open: dialogOpen,
   close: dialogClose,
   // dialog footer template
   footerTemplate: '<span id="posvalue" style="float:left;margin-left:8px;padding:10px;">Position: { X: "Center", Y: "Center" }</span>'
}); 

// render intialized Dialog
dialog.appendTo('#dialog');

let onChangeHandler: any = (args: any) => {
   dialog.position.X = args.value.split(' ')[0];
   dialog.position.Y = args.value.split(' ')[1];
   let txt: string[] = args.event.target.parentElement.querySelector('.e-label').innerText.split(' ');
   document.getElementById('posvalue').innerHTML = 'Position: { X: "' + txt[0] + '", Y: "' + txt[1] + '" }';
};

let radioButton: RadioButton = new RadioButton({label: 'Left Top', value: 'left top', change: onChangeHandler });
radioButton.appendTo('#radio1');

radioButton = new RadioButton({label: 'Center Top', value: 'center top', change: onChangeHandler});
radioButton.appendTo('#radio2');

radioButton = new RadioButton({label: 'Right Top', value: 'right top', change: onChangeHandler});
radioButton.appendTo('#radio3');

radioButton = new RadioButton({label: 'Left Center', value: 'left center', change: onChangeHandler});
radioButton.appendTo('#radio4');

radioButton = new RadioButton({label: 'Center Center', value: 'center center', change: onChangeHandler, checked: true});
radioButton.appendTo('#radio5');

radioButton = new RadioButton({label: 'Right Center', value: 'right center', change: onChangeHandler});
radioButton.appendTo('#radio6');

radioButton = new RadioButton({label: 'Left Bottom', value: 'left bottom', change: onChangeHandler});
radioButton.appendTo('#radio7');

radioButton = new RadioButton({label: 'Center Bottom', value: 'center bottom', change: onChangeHandler});
radioButton.appendTo('#radio8');

radioButton = new RadioButton({label: 'Right Bottom', value: 'right bottom', change: onChangeHandler});
radioButton.appendTo('#radio9');

document.getElementById("dialogBtn").onclick = (): void => {
   dialog.show();
}

function dialogOpen(): void {
   document.getElementById('dialogBtn').style.display ='none';
}

function dialogClose(): void {
   document.getElementById('dialogBtn').style.display ='block';
}
