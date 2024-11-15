import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { db } from './firebase'; // Assuming you've set up Firebase and exported 'db' from firebase.js
import { collection, addDoc, Timestamp } from "firebase/firestore"; 

export default function L() {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [calories, setCalories] = useState(0); 

    const handleLogin = async () => {
        
        try {
            await addDoc(collection(db, "caloriesData"), {
                email,
                name,
                
                timestamp: Timestamp.now()
            });
            navigate('/main'); 
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div className="op">
            <div className="po">
                <h2 className="ii">Login to Nir Fit</h2>
                <input 
                    className="jj" 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    className="kk" 
                    type="password" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
               
                <button className="zz" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}
