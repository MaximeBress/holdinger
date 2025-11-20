import Button from '@/components/ui/Button';
import activities from '@/data/activities.json';

export default function BtpPage() {
    const equipment = activities.btp;

    return (
        <div className="container py-lg">
            <div className="text-center mb-lg">
                <h1 className="text-4xl mb-sm">Location Matériel BTP</h1>
                <p className="text-xl text-[#666]">Des engins professionnels pour tous vos travaux de terrassement et d'aménagement.</p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-md">
                {equipment.map((item) => (
                    <div key={item.id} className="bg-surface border border-[#eee] rounded-md p-md flex flex-col items-center text-center">
                        <div
                            className="w-full h-[200px] bg-[#f4f4f4] bg-contain bg-no-repeat bg-center mb-md rounded-sm"
                            style={{ backgroundImage: `url(${item.image})` }}
                        />
                        <h3 className="text-xl font-bold mb-sm">{item.name}</h3>
                        <div className="bg-[#f9f9f9] p-sm rounded-sm w-full my-sm text-sm">
                            <strong className="block text-primary mb-1">Usage</strong>
                            {item.usage}
                        </div>
                        <div className="bg-[#f9f9f9] p-sm rounded-sm w-full my-sm text-sm">
                            <strong className="block text-primary mb-1">Spécifications</strong>
                            {item.specs}
                        </div>
                        <Button href="/contact" variant="primary" className="mt-4 w-full">
                            Demander un devis
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
