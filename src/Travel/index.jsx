import React from 'react';
import Breadcrumb from '../components/custom/Breadcrumb'
const items =[
    { fr: 'Accueil', en :'Home', to: '/'},
    { fr: 'Voyages', en :'Travel', to: '/travel'},
];
const TravelList = () => {
    return (
   		<div class="container">
   			<Breadcrumb items={items}/>
            <div class="card" >
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
   		</div>
    )
};

export default TravelList;
