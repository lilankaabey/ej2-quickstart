import { Accordion } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let accordion = new Accordion({
   items: [
      {
         header: 'ASP.NET',
         expanded: true,
         content:'Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services'
      },
      { header: 'ASP.NET MVC', content: 'The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller.' },
      { header: 'JavaScript', content: 'JavaScript (JS) is an interpreted computer programming language. It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.' }
   ]
});

accordion.appendTo('#element');