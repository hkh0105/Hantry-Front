export default function Dropdown({
  optionList,
  defaultValue,
  onChange,
  value = "value",
  description = "description",
}) {
  return (
    <>
      {optionList?.length && (
        <select
          name="type"
          className="form-name-input"
          defaultValue={defaultValue}
          onChange={event => onChange(event.target.value)}
        >
          {optionList.map((element, index) => {
            return (
              <option value={element[value]} key={index}>
                {element[description]}
              </option>
            );
          })}
        </select>
      )}
    </>
  );
}
