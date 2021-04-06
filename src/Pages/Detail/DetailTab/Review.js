import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../../Store/Action/Movies";
import { connect } from "react-redux";
import "../../../Styles/overview.css";

function Review(props) {
  const params = useParams();

  useEffect(() => {
    props.getMovieReviews(params.id);
  }, [params.id]);

  return (
    <div className="container">
      <form className="review mt-4 ml-3">
        <div className="review-img mr-4 pt-2">
          <img src="https://icon-library.com/images/avatar-icon-free/avatar-icon-free-12.jpg" />
        </div>
        <div className="review-form">
          <label>Selviany</label>
          <ReactStars
            size={20}
            count={5}
            isHalf={true}
            value={0}
            color={"grey"}
            activeColor={"yellow"}
            onChange={(newValue) => {
              console.log(`Example 3: new value is ${newValue}`);
            }}
          />
          <textarea
            rows="4"
            cols="100"
            name="comment"
            form="usrform"
            placeholder="Input Review Here...."
          />
        </div>
      </form>
      {props.movieReview.length === 0
        ? null
        : props.movieReview.map((review) => {
            return (
              <div className="review mt-4 ml-3 w-75">
                <div className="review-img mr-4 pt-2">
                  <img src="https://icon-library.com/images/avatar-icon-free/avatar-icon-free-12.jpg" />
                </div>
                <div>
                  <p className="font-weight-bold mb-0">Selviany</p>
                  <p>{review.comment}</p>
                </div>
              </div>
            );
          })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    movieReview: state.Movies.reviewData,
  };
};
export default connect(mapStateToProps, { getMovieReviews })(Review);
