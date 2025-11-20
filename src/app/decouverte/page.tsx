import Button from '@/components/ui/Button';
import activities from '@/data/activities.json';

export default function DiscoveryPage() {
    const data = activities.discovery;

    return (
        <div className="container py-lg">
            <div className="text-center mb-lg">
                <h1 className="text-4xl mb-sm">{data.title}</h1>
            </div>

            <p className="max-w-[800px] mx-auto mb-lg text-center text-xl text-[#666]">{data.description}</p>

            <div className="flex flex-col gap-lg">
                {data.activities.map((activity, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-md bg-surface rounded-md overflow-hidden shadow-sm group even:direction-rtl md:even:[direction:rtl]">
                        <div
                            className="min-h-[300px] h-[200px] md:h-auto bg-[#ddd] bg-cover bg-center"
                            style={{ backgroundImage: `url(${activity.image})` }}
                        />
                        <div className="p-md flex flex-col justify-center md:group-even:[direction:ltr]">
                            <div className="inline-block bg-secondary text-text px-2 py-1 rounded-sm text-sm font-bold mb-sm w-fit">{activity.duration}</div>
                            <h3 className="text-2xl font-bold mb-sm">{activity.name}</h3>
                            {activity.description && <p className="mb-sm text-[#444]">{activity.description}</p>}
                            <p className="mt-2 text-sm text-gray-600">Niveau : {activity.level || 'Tous niveaux'}</p>
                            <Button href="/contact" variant="outline" className="mt-4 w-fit">
                                Réserver
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
