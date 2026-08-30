import "./MapCard.css";

interface MapCardProps {
    serfdomTitle: string;
    modernTitle: string;
    modernized: boolean;
    sphere: string;
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