import { useState } from "react";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";
import { Calendar } from "primereact/calendar";

const ToolBar = () => {
  const [date, setDate] = useState(null);

  const reset = () => {
    setDate(null);
  };

  return (
    <>
      <Toolbar
        left={
          <>
            <MultiSelect placeholder="Qualsiasi corso" className="p-mr-3" />
            <MultiSelect
              placeholder="Qualsiasi istruttore"
              className="p-mr-3"
            />
            <Calendar
              placeholder="Qualsiasi data"
              value={date}
              onChange={(e) => setDate(e.value)}
              className="p-mr-3"
            />
            <Button
              label="Reset"
              className={`p-button-secondary ${date === null && "p-disabled"}`}
              onClick={reset}
            />
          </>
        }
      ></Toolbar>
    </>
  );
};
export default ToolBar;
