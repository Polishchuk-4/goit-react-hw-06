import style from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={style.searchBox}>
      <label className={style.searchBoxLabel}>
        Find contacts by name
        <input
          className={style.searchBoxInput}
          value={value}
          onChange={(e) => {
            onFilter(e.target.value);
          }}
        />
      </label>
    </div>
  );
}
