import "./Card.css"

const Card = ({ data }) => {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{data.code}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{data.description}</h6>
        <p class="card-text">
        <span dangerouslySetInnerHTML={{ __html: data.symbol }} /> {data.rate}
        </p>
      </div>
    </div>
  );
};

export default Card;
