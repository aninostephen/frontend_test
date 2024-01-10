import Select from "react-select";

interface ControlsProps {
  filterField: () => void;
  filterDirection: (direction: string) => void; // Example: filterDirection takes a string parameter
}

const Controls: React.FC<ControlsProps> = ({filterField, filterDirection}) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company.name" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select options={fieldOptions} onChange={filterField} inputId="sort-field" className="input" />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={filterDirection}
        />
      </div>
    </div>
  );
};

export default Controls;
