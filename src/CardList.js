import React from 'react';
import Card from './Card';

// the key is to differentiate the components created - it should be 
const CardList = ({ robots }) => {
    return (
        <div>
            { // we could use forEach instead of map
                robots.map((user, i) => {
                    return (
                        <Card
                            key={robots[i].id}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList