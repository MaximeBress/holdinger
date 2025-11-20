import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-surface shadow-sm sticky top-0 z-50 py-sm">
            <div className="container flex justify-between items-center">
                <Link href="/" className="font-serif text-2xl font-bold text-primary">
                    Holdinger
                </Link>
                <nav>
                    <ul className="hidden md:flex gap-md list-none">
                        <li><Link href="/immobilier" className="text-text font-medium hover:text-accent transition-colors">Location Chalet</Link></li>
                        <li><Link href="/vente" className="text-text font-medium hover:text-accent transition-colors">Vente</Link></li>
                        <li><Link href="/decouverte" className="text-text font-medium hover:text-accent transition-colors">Découverte</Link></li>
                        <li><Link href="/materiel" className="text-text font-medium hover:text-accent transition-colors">Matériel BTP</Link></li>
                        <li><Link href="/a-propos" className="text-text font-medium hover:text-accent transition-colors">À Propos</Link></li>
                        <li><Link href="/contact" className="text-text font-medium hover:text-accent transition-colors">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
