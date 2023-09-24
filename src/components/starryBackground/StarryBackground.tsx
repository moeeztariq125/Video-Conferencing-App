import './StarryBackground.css'; // Import the CSS file

function StarryBackground() {
  return (
    <div className="starry-background">
      {Array.from({ length: 50 }).map((_, index) => (
        <div key={index} className="star" />
      ))}
    </div>
  );
}

export default StarryBackground;
