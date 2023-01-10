import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <i class='bx bxs-camera-movie'></i>
      <div>
      <Link to="/favourites"><img src="" alt="" /></Link>
        <input type="search" placeholder="search movies" />
        <i class='bx bx-search'></i>
        <Link to="/addmovies">Add new Movies</Link>
        <Link to="/favourites">favourites</Link>
      </div>
    </nav>
  );
}
export default Navbar;
