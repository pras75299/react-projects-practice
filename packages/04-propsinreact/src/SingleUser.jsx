const SingleUser = (props) => {
  const { name, age, image } = props;

  const handleImageError = (event) => {
    event.target.src = "https://via.placeholder.com/150";
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-orange-600">
      <img
        className="w-full"
        src={image}
        alt={name}
        onError={handleImageError}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{name}</div>
        <p className="text-base text-white">Age: {age}</p>
      </div>
    </div>
  );
};

export default SingleUser;
