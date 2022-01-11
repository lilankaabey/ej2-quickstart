// import { Button } from '@syncfusion/ej2-buttons';
import { Diagram, NodeModel, ConnectorModel, HierarchicalTree, BpmnDiagrams } from '@syncfusion/ej2-diagrams';

// let button: Button = new Button();

// the component of diagram can be injected to diagram like this. before that we have to import those modules
// Diagram.Inject(BpmnDiagrams);

// To create a flow diagram we have to add a node (JSON data) with specific position size label and shape

let nodes: NodeModel[] = [{
   id: "Start",
   offsetX: 300,
   offsetY: 50,
   width: 140,
   height: 50,
   annotations: [{
      id: 'label1',
      content: 'Start'
   }],
   shape: {
      type: 'Flow',
      shape: 'Terminator'
   },
},
{
   id: 'Init',
   width: 140,
   height: 50,
   offsetX: 300,
   offsetY: 140,
   shape: {
      type: 'Flow',
      shape: 'Process'
   },
   annotations: [{
      content: 'var i=0'
   }]

}
];

let connectors: ConnectorModel = {
   id: "connector1",
   sourceID: 'Start',
   targetID: 'Init',
   type: 'Orthogonal'
};



let diagram: Diagram = new Diagram({
   width: '100%', height: '600px',
   // Add node
   nodes: nodes,
   connectors: [connectors]
});

// button.appendTo('#normalbtn');
diagram.appendTo("#element");
