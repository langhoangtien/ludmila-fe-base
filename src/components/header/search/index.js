import "./style.css";
export default function Search() {
  return (
    <>
      <form role="search" method="get" action="">
        <div className="input-container">
          <input
            type="search"
            className="search-input"
            defaultValue=""
            name="s"
            placeholder="Search entire website..."
          />
          <button type="submit" className="search-submit btn" name="submit">
            Tìm kiếm
          </button>
        </div>
        {/* input-container */}
      </form>
      {/* searchform */}
    </>
  );
}
