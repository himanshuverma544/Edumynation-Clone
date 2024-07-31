import { ActiveStar, InactiveStar } from "../../assets/general/ratings/images";


export default function Rating({ given, length = 5 }) {

  return (
    <div className="rating flex p-1 mt-2">
      {Array.from({ length: length }).map((_, index) =>
        <div key={index} className="icon-cont">
          {index < given ? 
            <ActiveStar/> : <InactiveStar/>
          }
        </div>
      )}
    </div>
  );
}
