import { useState } from "react";

function Heroes() {
    const [names, setNames] = useState([
        "Шерлок Холмс",
        "Доктор Ватсон",
        "Профессор Мариарти",
        "Миссис ХАдсон",
        "Ирен Фдлер",
    ]);

    function handlerDelete(id) {
        setNames(
            names.filter((item, index) => {
                return index !== id;
            })
    );
    }
    return (
        <ul>
        {names.map((item, index) => {
            return <li onClick={() => handlerDelete(index)}>{item}</li>
        })}
        </ul>
    )
}
export default Heroes