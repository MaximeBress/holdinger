interface MapProps {
    address?: string;
}

export default function MapComponent({ address = "Les Orres, 05200" }: MapProps) {
    const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=6.5300,44.4800,6.5700,44.5200&layer=mapnik`;

    return (
        <div className="w-full h-[400px] bg-gray-200 rounded-md flex items-center justify-center text-[#666] relative overflow-hidden">
            <iframe
                className="w-full h-full border-0"
                src={mapUrl}
                loading="lazy"
                title="Carte de localisation"
            ></iframe>
        </div>
    );
}
