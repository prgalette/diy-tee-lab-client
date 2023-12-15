const ShirtCard = ({ shirt }) => {
  return (
    //   <div className="card">
    //     <img src={product.image} alt="Products" />
    //     <h3>{product.title}</h3>
    //     <p>{product.category}</p>
    //     <p>{product.price}</p>
    //     <p className="description">{product.description}</p>
    //   </div>

    <div className="d-flex justify-content-center">
      <div className="card" style={{ width: "26rem" }}>
        <img src={shirt.image_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{shirt.title}</h3>
          <p className="card-text">{shirt.tagline}</p>
        </div>
      </div>
    </div>
  );
};

export default ShirtCard;
