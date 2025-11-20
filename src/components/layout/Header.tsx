'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-surface shadow-sm sticky top-0 z-50 py-sm">
            <div className="container flex justify-between items-center">
                <Link href="/" className="font-serif text-2xl font-bold text-primary">
                    Holdinger
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex gap-md list-none">
                        <li><Link href="/immobilier" className="text-text font-medium hover:text-accent transition-colors">Location Chalet</Link></li>
                        <li><Link href="/vente" className="text-text font-medium hover:text-accent transition-colors">Vente</Link></li>
                        <li><Link href="/decouverte" className="text-text font-medium hover:text-accent transition-colors">Découverte</Link></li>
                        <li><Link href="/materiel" className="text-text font-medium hover:text-accent transition-colors">Matériel BTP</Link></li>
                        <li><Link href="/a-propos" className="text-text font-medium hover:text-accent transition-colors">À Propos</Link></li>
                        <li><Link href="/contact" className="text-text font-medium hover:text-accent transition-colors">Contact</Link></li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-text hover:text-primary transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden absolute top-full left-0 right-0 bg-surface shadow-lg border-t border-border/10 animate-in slide-in-from-top-2">
                    <ul className="flex flex-col p-md gap-sm list-none">
                        <li>
                            <Link
                                href="/immobilier"
                                className="block py-2 text-text font-medium hover:text-accent transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Location Chalet
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/vente"
                                className="block py-2 text-text font-medium hover:text-accent transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Vente
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/decouverte"
                                className="block py-2 text-text font-medium hover:text-accent transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Découverte
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/materiel"
                                className="block py-2 text-text font-medium hover:text-accent transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Matériel BTP
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/a-propos"
                                className="block py-2 text-text font-medium hover:text-accent transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                À Propos
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="block py-2 text-text font-medium hover:text-accent transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
