import "./search.css";
function Search() {
  return (
    <div className="inlineSearch">
      <select
      defaultValue={"Tous les catégories"} 
        className="form-select form-select searchSelector"
        aria-label=".form-select-lg example"
      >
        <option className="optionsSearch" >Tous les catégories</option>
        <option value="1"  className="optionsSearch">Kit Robotique</option>
        <option value="2" className="optionsSearch">Kit IOT</option>
        <option value="3" className="optionsSearch">Clipart Laser Cut</option>
      </select>
      <input type="Search" placeholder="  🔎  Chercher dans tous le store.."  className="searchInput"/>
      <div className="buttonSearch">Rechercher</div>
    </div>
  );
}
export default Search;
