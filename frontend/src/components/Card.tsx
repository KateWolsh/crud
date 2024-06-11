
interface cardProps {
  card: {
    id: number;
    content:string;
  };
  onDelete: (id: number) => void;
}

function Card( {card, onDelete}: cardProps ) {
     
  return (
    <div className="card">
        <button className="delete_card"
          onClick={() => onDelete(card.id)}>🗑️</button>
        <p className="text_card">{card.content}</p>
    </div>
  )
}

export default Card
