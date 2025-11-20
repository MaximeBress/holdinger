import Button from '@/components/ui/Button';
import Gallery from '@/components/ui/Gallery';
import activities from '@/data/activities.json';

export default function RentalPage() {
    const data = activities.rental;

    return (
        <div className="container py-lg">
            <div className="text-center mb-lg">
                <h1 className="text-[2.5rem] mb-sm">{data.title}</h1>
                <p className="text-xl text-[#666] max-w-[800px] mx-auto">{data.description}</p>
            </div>

            <div className="mb-lg">
                <Gallery images={data.images} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-lg">
                <div>
                    <div className="mb-lg">
                        <h2 className="mb-md text-2xl">Caractéristiques</h2>
                        <ul className="list-none grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-sm">
                            {data.features.map((feature, index) => (
                                <li key={index} className="bg-surface p-sm rounded-sm shadow-sm flex items-center">✓ {feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-md text-2xl">Description</h2>
                        <p className="text-[#444] leading-relaxed">
                            Situé idéalement au cœur de la station des Orres, ce chalet offre une expérience unique.
                            Entièrement rénové avec des matériaux nobles (bois, pierre), il allie charme montagnard et confort moderne.
                            <br /><br />
                            La grande pièce de vie avec cheminée est parfaite pour se retrouver après une journée de ski.
                            La cuisine est entièrement équipée pour préparer de grands repas conviviaux.
                        </p>
                    </div>
                </div>

                <aside className="bg-surface p-md rounded-md shadow-sm h-fit sticky top-[100px]">
                    <span className="text-2xl font-bold text-primary mb-md block">{data.price}</span>
                    <p className="mb-4 text-[#666]">
                        Disponibilités et réservations sur demande.
                    </p>
                    <Button href="/contact" className="w-full">
                        Contacter pour réserver
                    </Button>
                </aside>
            </div>
        </div>
    );
}
