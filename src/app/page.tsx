import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <div>
      <section className="h-[80vh] bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/images/hero-mountains.jpg')] bg-cover bg-center flex items-center justify-center text-center text-surface mb-lg">
        <div className="px-sm">
          <h1 className="text-[3.5rem] mb-sm text-surface drop-shadow-md">Holdinger</h1>
          <p className="text-xl mb-md max-w-[600px] mx-auto drop-shadow-sm">Votre partenaire privilégié pour l'immobilier, la découverte et les travaux en montagne.</p>
          <Button href="/contact" variant="primary">Nous Contacter</Button>
        </div>
      </section>

      <section className="container py-lg">
        <h2 className="text-center text-3xl mb-md">Nos Activités</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-md mt-md">

          {/* Location Chalet */}
          <div className="bg-surface rounded-md overflow-hidden shadow-sm transition-transform duration-200 hover:-translate-y-1 flex flex-col">
            <div className="h-[200px] bg-[#ddd] bg-cover bg-center" style={{ backgroundImage: 'url(/images/chalet-home.jpg)' }}></div>
            <div className="p-md flex-1 flex flex-col">
              <h3 className="mb-xs text-xl font-bold">Location Chalet</h3>
              <p className="text-[#666] mb-md flex-1">Séjournez dans notre chalet d'exception aux Orres. Confort, vue panoramique et accès direct aux pistes.</p>
              <Button href="/immobilier" variant="outline">Découvrir le Chalet</Button>
            </div>
          </div>

          {/* Vente Immobilière */}
          <div className="bg-surface rounded-md overflow-hidden shadow-sm transition-transform duration-200 hover:-translate-y-1 flex flex-col">
            <div className="h-[200px] bg-[#ddd] bg-cover bg-center" style={{ backgroundImage: 'url(/images/vente-home.jpg)' }}></div>
            <div className="p-md flex-1 flex flex-col">
              <h3 className="mb-xs text-xl font-bold">Vente Immobilière</h3>
              <p className="text-[#666] mb-md flex-1">Découvrez notre sélection de biens à la vente. Appartements, chalets et terrains dans les Hautes-Alpes.</p>
              <Button href="/vente" variant="outline">Voir les Biens</Button>
            </div>
          </div>

          {/* Découverte */}
          <div className="bg-surface rounded-md overflow-hidden shadow-sm transition-transform duration-200 hover:-translate-y-1 flex flex-col">
            <div className="h-[200px] bg-[#ddd] bg-cover bg-center" style={{ backgroundImage: 'url(/images/4x4-home.jpg)' }}></div>
            <div className="p-md flex-1 flex flex-col">
              <h3 className="mb-xs text-xl font-bold">Découverte 4x4 & Quad</h3>
              <p className="text-[#666] mb-md flex-1">Explorez la montagne autrement. Randonnées guidées et safaris photo pour toute la famille.</p>
              <Button href="/decouverte" variant="outline">L'Aventure</Button>
            </div>
          </div>

          {/* Matériel BTP */}
          <div className="bg-surface rounded-md overflow-hidden shadow-sm transition-transform duration-200 hover:-translate-y-1 flex flex-col">
            <div className="h-[200px] bg-[#ddd] bg-cover bg-center" style={{ backgroundImage: 'url(/images/btp-home.jpg)' }}></div>
            <div className="p-md flex-1 flex flex-col">
              <h3 className="mb-xs text-xl font-bold">Location Matériel BTP</h3>
              <p className="text-[#666] mb-md flex-1">Louez le matériel adapté à vos chantiers. Mini-pelles, chargeuses et outillage professionnel.</p>
              <Button href="/materiel" variant="outline">Le Catalogue</Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
