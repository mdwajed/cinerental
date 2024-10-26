import star from "../assets/star.svg";
export function Rating({ value }) {
  const stars = Array(value).fill(star);

  return (
    <>
      {stars.map((star, index) => (
        <img src={star} key={index} width="14" height="14" alt={star} />
      ))}
    </>
  );
}
