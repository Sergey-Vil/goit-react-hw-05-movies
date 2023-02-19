import { getReviewsId } from 'components/services/moviesService';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    const getReviews = async () => {
      const dataReviews = await getReviewsId(movieId);

      setReviews(dataReviews.data.results);
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews?.length > 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>Character:{review.content}</p>
              <p>{review.updated_at}</p>
            </li>
          ))
        ) : (
          <p> We don't have any reviews for this movie.</p>
        )}
      </ul>
      <Outlet />
    </>
  );
};

export default Reviews;
