import "./MapCard.css";

interface MapCardProps {
    cardNumber: number;
    serfdomTitle: string;
    modernTitle: string;
    modernized: boolean;
    sphere: string;
    portOne: string;
    portOneAdmin: string;
    portOneDefaultAdmin: string;
    portOneSlaveSpaces: number;
    portTwo?: string;
    portTwoAdmin?: string;
    portTwoDefaultAdmin?: string;
    portTwoSlaveSpaces?: number;
    dissentSpaces: number;
    anarchy: number;
    disease: boolean;
    coastalNorth?: boolean;
    coastalSouth?: boolean;
    coastalEast?: boolean;
    coastalWest?: boolean;
}



function MapCard({ serfdomTitle, modernTitle, modernized }: MapCardProps) {
    const displayTitle = modernized === false
        ? serfdomTitle
        : modernTitle;

    return (
        <div className="map-card">
            <h2>{displayTitle}</h2>

            <div className="map">
                {/* Your map will eventually go here */}
            </div>
        </div>
    );
}

export default MapCard;