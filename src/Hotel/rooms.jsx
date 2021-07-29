import React,{useState,useEffect} from 'react';
import RoomCard from './components/RoomCard'
import SearchRoom from './components/SearchRoom'
import RoomDescription from './components/RoomDescription'
import { roomsData } from '../data/hotels.js'
const RoomList = () => {
	const [rooms,setRooms] = useState([]);
	const [dataIsFetched,setDataIsFetched] = useState(false);
	const [slidesAreLoaded,setSlidesAreLoaded] = useState(false);
	const getAllRooms = () =>{
		setRooms(roomsData);
	}
	useEffect(()=>{
		getAllRooms();
	},[])
    return (
    	<>
    	<SearchRoom />
    	<RoomDescription rooms={rooms} />
		<div className="row">
		{
			rooms.map(room => (
				<>
					<RoomCard key={room.id} room={room}/>
				</>
			))
		}
		</div>        
		</>        
    );
};

export default RoomList;
