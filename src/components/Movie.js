import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ mediumCoverImage, title, summary, genres, id }) {
  return (
    <div>
      <img src={mediumCoverImage} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.checkPropTypes = {
  id: PropTypes.number.isRequired,
  mediumCoverImage: PropTypes.toString.isRequired,
  title: PropTypes.toString.isRequired,
  summary: PropTypes.toString.isRequired,
  genres: PropTypes.arrayOf(PropTypes.toString).isRequired,
};

export default Movie;
