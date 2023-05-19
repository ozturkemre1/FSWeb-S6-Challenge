// Karakter bileşeniniz buraya gelecek
import React from "react";
import Accordeon from "./Accordeon";
import Films from "./Films";

const Karakter = ({chars,films}) => {
    return (
    <div>
         <div>
            <h1>Karakterler</h1>
            {chars.map((char,i) => (<Accordeon key={i} title={char.name}>
                <p>
                    <span>
                        Gender:
                    </span>
                    {char.gender}
                </p>
                <p>
                    <span>
                        Height:
                    </span>
                    {char.height}
                </p>
                <p>
                    <span>
                        Mass:
                    </span>
                    {char.mass}
                </p>
                <p>
                    <span>
                        Birth Year:
                    </span>
                    {char.birth_year}
                </p>
                <p>
                    <span>
                        Eye Color:
                    </span>
                    {char.eye_color}
                </p>
                <p>
                    <span>
                        Hair Color:
                    </span>
                    {char.hair_color}
                </p>
                <p>
                    <span>
                        Skin Color:
                    </span>
                    {char.skin_color}
                </p>
                <p>
                    <span>
                        Appears in:
                    </span>
                    
                </p>
                <Films char={char} films={films} />
            </Accordeon> ))}
            
        </div>
       
    </div>
    )
}

export default Karakter;
