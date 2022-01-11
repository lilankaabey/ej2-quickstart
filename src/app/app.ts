// import { Button } from '@syncfusion/ej2-buttons';
import { Diagram, HierarchicalTree, BpmnDiagrams } from '@syncfusion/ej2-diagrams';

// let button: Button = new Button();

// the component of diagram can be injected to diagram like this. before that we have to import those modules
// Diagram.Inject(BpmnDiagrams);

let diagram: Diagram = new Diagram({
   width: '100%', height: '600px'
});

// button.appendTo('#normalbtn');
diagram.appendTo("#element");
