import { useState } from "react";


export interface onCreateCardProps {
    onCreate: (text: string) => void;
}

function CreateCard( {onCreate}: onCreateCardProps ) {
    const [text, setText] = useState(''); 
    const handleAddText = () => {
        onCreate(text);
        setText('');
    }

    return (
    <div className="new_note">
        <p>New note</p>
        <div className="input_container">
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="input"
            >    
            </input>
            <button className="send_text" onClick={handleAddText}>►</button>
        </div>
    </div>
  )
}

export default CreateCard
