import { TreeView } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// define array of JSON
let data: { [key: string]: Object } [] = [
   {
      nodeId: '01',
      nodeText: 'Music',
      nodeChild: [
         {
            nodeId: '01-01',
            nodeText: 'Gouttes.mp3'
         }
      ]
   },
   {
      nodeId: '02',
      nodeText: 'Videos',
      expanded: true,
      nodeChild: [
         {
            nodeId: '02-01',
            nodeText: 'Natular.mp4'
         },
         {
            nodeId: '02-02',
            nodeText: 'Wild.mpeg'
         }
      ]
   },
   {
      nodeId: '03',
      nodeText: 'Documents',
      nodeChild: [
         {
            nideId: '03-01',
            nodeText: 'something.docx'
         },
         {
            nodeId: '03-02',
            nodeText: 'something2.ppt'
         },
         {
            nodeId: '03-03',
            nodeText: 'something3.pdf'
         }
      ]
   }
];

let treeViewInstance = new TreeView({
   fields: { 
      dataSource: data,
      id: 'nodeId',
      text: 'nodeText',
      child: 'nodeChild'
   }
});

treeViewInstance.appendTo('#tree');