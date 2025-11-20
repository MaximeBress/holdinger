import Button from '@/components/ui/Button';
import activities from '@/data/activities.json';

export default function SalePage() {
    const properties = activities.sale;

    return (
        <div className="container py-lg">
            <div className="text-center mb-lg">
                <h1 className="text-4xl mb-sm">Vente Immobilière</h1>
                <p className="text-xl text-[#666]">Découvrez nos opportunités d'investissement dans les Alpes.</p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-md">
                {properties.map((property) => (
                    <div key={property.id} className="bg-surface rounded-md overflow-hidden shadow-sm transition-transform duration-200 hover:-translate-y-1 flex flex-col">
                        <div
                            className="h-[250px] bg-[#ddd] bg-cover bg-center"
                            style={{ backgroundImage: `url(${property.image})` }}
                        />
                        <div className="p-md flex-1 flex flex-col">
                            <div className="flex justify-between items-center mb-xs text-[#666] text-sm">
                                <span>{property.location}</span>
                                <span>{property.specs}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-sm">{property.title}</h3>
                            <div className="font-bold text-primary text-xl mt-auto pt-sm">{property.price}</div>
                            <Button href="/contact" variant="outline" className="mt-4">
                                Nous contacter
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
