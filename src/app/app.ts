// import { Button } from '@syncfusion/ej2-buttons';
import { Diagram, NodeModel, Node, ConnectorModel, HierarchicalTree, DataBinding, TreeInfo, SnapConstraints} from '@syncfusion/ej2-diagrams';
import { DataManager, Query } from  '@syncfusion/ej2-data';
Diagram.Inject(DataBinding, HierarchicalTree);

// let button: Button = new Button();

// the component of diagram can be injected to diagram like this. before that we have to import those modules
// Diagram.Inject(BpmnDiagrams);

// To create a flow diagram we have to add a node (JSON data) with specific position size label and shape


export interface EmployeeInfo {
   Name: string;
   Role: string;
}

let codes: object = {
   Director: "rgb(0,139,139)",
   Manager: "rgb(30,30,133)",
   Lead: "rgb(0,100,0)"
}

function getNodeTemplate(node: NodeModel) {
   node.annotations[0].content = (node.data as EmployeeInfo).Name;
   node.style.fill = codes[(node.data as EmployeeInfo).Role];
}

// Initial Data Source
let data: object[] = [
   {Name: "Elizabeth", Role: "Director" },
   { Name: "Christina", ReportingPerson: "Elizabeth", Role: "Manager" },
   { Name: "Yoshi", ReportingPerson: "Christina", Role: "Lead" },
   { Name: "Philip", ReportingPerson: "Christina", Role: "Lead" },
   { Name: "Yang", ReportingPerson: "Elizabeth", Role: "Manager" },
   { Name: "Roland", ReportingPerson: "Yang", Role: "Lead" },
   { Name: "Yvonne", ReportingPerson: "Yang", Role: "Lead" }
];

let items: DataManager = new DataManager(data as JSON[], new Query().take(7));

let diagram: Diagram = new Diagram({
   width: '100%', height: '600px',
   snapSettings: { constraints: SnapConstraints.None },
   //Use automatic layout to arrange elements on the page
   layout: {
      type:'OrganizationalChart',
      margin: {left: 10, top: 10},
      horizontalSpacing: 50,
      verticalSpacing: 50,
      orientation:'TopToBottom',
      getLayoutInfo: (node: Node, tree: TreeInfo) => {
         if (!tree.hasSubTree) {
               tree.orientation = 'Vertical';
               tree.type = 'Alternate';
               }
      }
   },
   dataSourceSettings: {
      id: 'Name', parentId: 'ReportingPerson', dataManager: items
   },

   getNodeDefaults: (obj: Node, diagram: Diagram) => {
      obj.height = 30; obj.width = 70;
      obj.shape = { type: 'Basic', shape: 'Rectangle'};
      obj.annotations = [{
         id: 'label1',
         style: {
            fontSize: 11,
            bold: true,
            fontFamily: "Segoe UI",
            color: "white"
         }
      }]

      return obj;
   },

   getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
      connector.targetDecorator.shape = 'Arrow';
      connector.type = 'Orthogonal';
      return connector;
  },
  
  setNodeTemplate: (node: NodeModel) => {
   return getNodeTemplate(node);
   }
})







// let nodes: NodeModel[] = [
//    { id: 'Start', offsetY: 50, annotations: [{ content: 'Start' }], shape: { type: 'Flow', shape: 'Terminator' } },
//    { id: 'Init', offsetY: 140, annotations: [{ content: 'var i = 0;' }], shape: { type: 'Flow', shape: 'Process' } },
//    { id: 'Condition', offsetY: 230, annotations: [{ content: 'i < 10?' }], shape: { type: 'Flow', shape: 'Decision' } },
//    { id: 'Print', offsetY: 320, annotations: [{ content: 'print(\'Hello!!\');' }], shape: { type: 'Flow', shape: 'PreDefinedProcess' } },
//    { id: 'Increment', offsetY: 410, annotations: [{ content: 'i++;' }], shape: { type: 'Flow', shape: 'Process' } },
//    { id: 'End', offsetY: 500, annotations: [{ content: 'End' }], shape: { type: 'Flow', shape: 'Terminator' } },
//    ];

// let connectors: ConnectorModel[] = [{
//    id: "connector1",
//    sourceID: 'Start',
//    targetID: 'Init',
// },
// { id: "connector2", sourceID: "Init", targetID: "Condition"},
// { id: "connector3", sourceID: "Condition", targetID: "Print", annotations: [{ content: 'Yes'}]},
// { id: "connector4", sourceID: "Condition", targetID: "End", annotations: [{ content: "No"}],
//    type: "Orthogonal",
//    segments: [
//       {type: 'Orthogonal', length: 30, direction: "Right"},
//       {type: "Orthogonal", length: 300, direction: "Bottom"}
//    ]
// },
// { id: 'connector5', sourceID: "Print", targetID: "Increment"},
// { 
//    id: 'connector6',
//    sourceID: 'Increment', targetID: 'Condition',
//    type: 'Orthogonal',
//    segments: [
//       { type: 'Orthogonal', length: 30, direction: "Left"},
//       { type: 'Orthogonal', length: 200, direction: 'Top'}
//    ]
// }
// ];



// let diagram: Diagram = new Diagram({
//    width: '100%', height: '600px',
//    // Add node
//    nodes: nodes,
//    connectors: connectors,
//    getNodeDefaults: (node: NodeModel) => {
//       node.height = 50;
//       node.width = 140;
//       node.offsetX = 300;
//       return node;
//    },
//    getConnectorDefaults: (obj: ConnectorModel) => {
//       obj.type = "Orthogonal";
//       obj.targetDecorator = {
//          shape: 'Arrow',
//          width: 10,
//          height: 10,
//       }
//       return obj;
//    }
// });

// button.appendTo('#normalbtn');
diagram.appendTo("#element");
