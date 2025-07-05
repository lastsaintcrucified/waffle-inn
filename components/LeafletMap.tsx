"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function LeafletMap() {
	return (
		<MapContainer
			center={[22.318119, 91.778227]}
			zoom={13}
			style={{ height: "250px", width: "100%" }}
		>
			<TileLayer
				attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker position={[22.318119, 91.778227]}>
				<Popup>Halishahar</Popup>
			</Marker>
		</MapContainer>
	);
}
