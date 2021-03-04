import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";

const left = (
  <>
    <Button label="Iscriviti" className="p-button-success" icon="pi pi-plus" />
    <Button label="Aggiungi" className="p-button-secondary p-ml-2" />
  </>
);

const right = (
  <>
    <SplitButton label="Altro" icon="pi pi-cog" />
  </>
);

const ToolBar = () => {
  return <Toolbar left={left} right={right}></Toolbar>;
};
export default ToolBar;
