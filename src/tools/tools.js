import React, { useContext, useEffect } from 'react';
import { opisContext } from '../context/opisContext';

const Tools = () => {
    const description = useContext(opisContext);

    useEffect(() => {
        if (description.length === 0) {
            return null
        } else {
            const toolContainer = document.getElementById('toolContainer');
            toolContainer.innerHTML = '';
            description.viewParams.rows[2].left.forEach((element) => {
                const toolIcon = document.createElement("icon");
                toolIcon.classList.add("toolIcon");
                toolContainer.appendChild(toolIcon);
                toolIcon.innerHTML = `${element.icon}`
            })
        }
    }, [description]);

    return (
        <div className="app__toolContainer" id="toolContainer">
        </div>
    );
}
export default Tools;