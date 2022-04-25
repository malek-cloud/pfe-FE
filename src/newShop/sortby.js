import "./sortby.css";
function Sort(params) {
  return (
    <div className="inlineSort ">
      <div className="sortTitle">Trier par :</div>
      <select
      defaultValue={"optionsSort"} 
        className="form-select form-select sortSelector"
        aria-label=".form-select-lg example"
      >
        <option className="optionsSort">
          Pertinence
        </option>
        <option value="1" className="optionsSort">
          prix croisssant
        </option>
        <option value="2" className="optionsSort">
          prix décroissant
        </option>
      </select>
    </div>
  );
}
export default Sort;
