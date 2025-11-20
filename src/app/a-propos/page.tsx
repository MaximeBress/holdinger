export default function AboutPage() {
    return (
        <div className="container py-lg max-w-[800px] mx-auto">
            <div className="text-center mb-lg">
                <h1 className="text-4xl mb-sm">À Propos</h1>
            </div>

            <div
                className="w-full h-[400px] bg-[#ddd] bg-cover bg-center rounded-md mb-lg"
                style={{ backgroundImage: 'url(/images/about.jpg)' }}
            />

            <div className="text-lg leading-relaxed text-[#444] space-y-md">
                <p>
                    Amoureux de la montagne et passionné par ma région, j'ai créé Holdinger pour partager avec vous les trésors des Hautes-Alpes.
                    Installé aux Orres depuis plus de 20 ans, je mets mon expertise à votre service dans plusieurs domaines.
                </p>
                <p>
                    Que ce soit pour trouver le chalet de vos rêves, investir dans l'immobilier, ou découvrir les sentiers cachés en 4x4,
                    je m'engage à vous offrir un service personnalisé et authentique.
                </p>
                <p>
                    Mon activité de location de matériel BTP s'adresse aux professionnels et particuliers souhaitant réaliser des travaux
                    avec du matériel fiable et performant.
                </p>
                <p>
                    N'hésitez pas à me contacter pour discuter de vos projets.
                </p>
            </div>
        </div>
    );
}
