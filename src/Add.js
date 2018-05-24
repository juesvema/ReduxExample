import React from 'react';
import './App.css';

class Add extends React.Component {
    render() {
        return (
            <form className="Add">
                <input name="name" type="text" placeholder="Name" />
                <input name="price" type="text" placeholder="Price" />
                <select type="text" placeholder="Add" >
                    <option value="available">Disponible</option>
                    <option value="unavailable">No disponible</option>
                </select>
                <textarea name="desc" placeholder="Desc" ></textarea>
                <input name="image" type="text" placeholder="Image" />
                <button type="submit">Visit Add</button>
            </form>
        );
    }
}

export default Add;
