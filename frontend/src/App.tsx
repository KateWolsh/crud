import { useEffect, useState } from 'react';
import './App.css'
import CreateCard from './components/CreateCard'
import Card from './components/Card';

interface CardType {
  id: number;
  content: string;
}

function App() {
const [cards, setCards] = useState<CardType[]>([]);
const onCreate = (text: string) => {
  fetch('http://localhost:7070/notes',{
    method: 'POST',
    body:  
      JSON.stringify({
      "id": performance.now(),
      "content": text
    }),
  }).then(() => {
    getCards();
  });
}
  const getCards = () => {
    fetch('http://localhost:7070/notes',{
      method: 'GET'
      })
      .then(response => {
        if(!response.ok){
          throw new Error('Ошибка запроса')
        }
        return response.json();
      })
      .then(cards => {
        setCards(cards);
      })
      .catch(error => {
        console.error('Error fetching cards:', error);
      });
  }

  const onDelete = (id: number) => {
    fetch(`http://localhost:7070/notes/${id}`, {
      method: 'DELETE',
    }).then(() => {
      getCards();
    })
  }

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className='container'>
      <div className='header_container'>
        <header className='header'>Notes</header>
        <button className='refresh'
          onClick={getCards}
        >⟲</button>
      </div>
      <div className='cards_list'>
        {cards.map((card) => (
          <Card
          key={card.id}
          card={card}
          onDelete={onDelete}
           /> 
        ))}
     
      </div>
      <CreateCard onCreate={onCreate}/>
    </div>
  )
}

export default App
