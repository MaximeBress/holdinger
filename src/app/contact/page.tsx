import Button from '@/components/ui/Button';
import MapComponent from '@/components/ui/MapComponent';

export default function ContactPage() {
    return (
        <div className="container py-lg max-w-[600px] mx-auto text-center">
            <h1 className="text-4xl mb-sm">Contactez-nous</h1>
            <p className="mb-8 text-gray-600">
                Une question ? Un projet ? Nous sommes à votre écoute.
            </p>

            <div className="bg-surface p-lg rounded-md shadow-md">
                <div className="my-lg">
                    <div className="mb-md text-xl">
                        <span className="block text-sm text-[#666] mb-1">Email</span>
                        <a href="mailto:contact@holdinger.fr" className="text-primary font-bold hover:underline">
                            contact@holdinger.fr
                        </a>
                    </div>

                    <div className="mb-md text-xl">
                        <span className="block text-sm text-[#666] mb-1">Téléphone</span>
                        <a href="tel:+33600000000" className="text-primary font-bold hover:underline">
                            +33 6 00 00 00 00
                        </a>
                    </div>

                    <div className="mb-md text-xl">
                        <span className="block text-sm text-[#666] mb-1">Adresse</span>
                        <span className="text-primary font-bold">
                            Les Orres<br />
                            05200 Hautes-Alpes<br />
                            France
                        </span>
                    </div>

                    <div className="my-8">
                        <MapComponent />
                    </div>
                </div>

                <Button href="mailto:contact@holdinger.fr" variant="primary">
                    Envoyer un email
                </Button>
            </div>
        </div>
    );
}
