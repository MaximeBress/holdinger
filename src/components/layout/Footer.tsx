import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-primary text-surface py-lg mt-auto">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-md">
                <div>
                    <h3 className="text-secondary mb-sm font-serif text-xl">Holdinger</h3>
                    <p>Découvrez les Alpes autrement. Location, achat, et aventures inoubliables.</p>
                </div>
                <div>
                    <h3 className="text-secondary mb-sm font-serif text-xl">Activités</h3>
                    <ul className="list-none space-y-xs">
                        <li><Link href="/immobilier" className="text-surface opacity-80 hover:opacity-100 transition-opacity">Location Chalet</Link></li>
                        <li><Link href="/vente" className="text-surface opacity-80 hover:opacity-100 transition-opacity">Vente Immobilière</Link></li>
                        <li><Link href="/decouverte" className="text-surface opacity-80 hover:opacity-100 transition-opacity">Découverte 4x4 & Quad</Link></li>
                        <li><Link href="/materiel" className="text-surface opacity-80 hover:opacity-100 transition-opacity">Location Matériel BTP</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-secondary mb-sm font-serif text-xl">Contact</h3>
                    <p>Email: contact@holdinger.fr</p>
                    <p>Tel: +33 6 00 00 00 00</p>
                    <p>Les Orres, Hautes-Alpes</p>
                </div>
            </div>
            <div className="container text-center mt-lg pt-md border-t border-white/10 text-sm opacity-80">
                <p>&copy; {new Date().getFullYear()} Holdinger. Tous droits réservés.</p>
            </div>
        </footer>
    );
}
