import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Rating({ rating }: any) {
  let ratingCeil = Math.ceil(rating);
  let ratingArray = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-[3px]">
      {ratingArray.map((el, i) => {
        if (el > ratingCeil) {
          return (
            <FontAwesomeIcon
              key={i}
              className="text-old-price w-4"
              icon={faStar}
            ></FontAwesomeIcon>
          );
        } else {
          return (
            <FontAwesomeIcon
              key={i}
              className="text-rating w-4"
              icon={faStar}
            ></FontAwesomeIcon>
          );
        }
      })}
    </div>
  );
}

export default Rating;
