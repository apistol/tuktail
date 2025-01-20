import React from 'react';

const Gdpr = () => {
    return (
        <div className="p-6 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Politica de Confidențialitate</h1>
            <p className="text-sm text-gray-600 mb-6">Ultima actualizare: 19 ianuarie 2025</p>

            <section className="mb-6">
                <p className="mb-4">
                    www.tukteil.ro respectă confidențialitatea datelor dumneavoastră și se angajează să protejeze informațiile personale colectate. Această politică de confidențialitate explică modul în care colectăm, utilizăm și protejăm datele cu caracter personal în conformitate cu Regulamentul General privind Protecția Datelor (GDPR).
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">1. Informații Colectate</h2>
                <ul className="list-disc list-inside">
                    <li className="mb-2">Date de identificare: nume, prenume.</li>
                    <li className="mb-2">Date de contact: adresă de e-mail, număr de telefon.</li>
                    <li className="mb-2">Date de utilizare: informații despre modul în care utilizați site-ul nostru.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">2. Scopul Colectării Datelor</h2>
                <p className="mb-4">Utilizăm datele colectate în următoarele scopuri:</p>
                <ul className="list-disc list-inside">
                    <li className="mb-2">Furnizarea serviciilor: pentru a vă oferi produsele și serviciile solicitate.</li>
                    <li className="mb-2">Comunicare: pentru a răspunde întrebărilor sau solicitărilor dumneavoastră.</li>
                    <li className="mb-2">Îmbunătățirea serviciilor: pentru a analiza și îmbunătăți serviciile și experiența utilizatorilor pe site-ul nostru.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">3. Temeiul Legal al Prelucrării</h2>
                <p className="mb-4">Prelucrăm datele dumneavoastră cu caracter personal pe baza următoarelor temeiuri legale:</p>
                <ul className="list-disc list-inside">
                    <li className="mb-2">Consimțământ: atunci când vă exprimați acordul explicit pentru prelucrarea datelor.</li>
                    <li className="mb-2">Executarea unui contract: atunci când prelucrarea este necesară pentru a vă furniza produsele sau serviciile solicitate.</li>
                    <li className="mb-2">Interes legitim: pentru îmbunătățirea și securizarea serviciilor noastre.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">4. Divulgarea Datelor</h2>
                <p className="mb-4">Nu vindem, nu închiriem și nu divulgăm datele dumneavoastră cu caracter personal către terți, cu excepția cazurilor în care acest lucru este necesar pentru:</p>
                <ul className="list-disc list-inside">
                    <li className="mb-2">Furnizori de servicii: parteneri care ne asistă în operarea site-ului și furnizarea serviciilor.</li>
                    <li className="mb-2">Obligații legale: conformarea cu obligațiile legale sau răspunsul la solicitări legitime din partea autorităților.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">5. Securitatea Datelor</h2>
                <p className="mb-4">Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele cu caracter personal împotriva accesului neautorizat, pierderii sau distrugerii.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">6. Drepturile Dumneavoastră</h2>
                <p className="mb-4">În conformitate cu GDPR, aveți următoarele drepturi:</p>
                <ul className="list-disc list-inside">
                    <li className="mb-2">Dreptul de acces: să solicitați informații despre datele personale pe care le deținem despre dumneavoastră.</li>
                    <li className="mb-2">Dreptul la rectificare: să solicitați corectarea datelor inexacte sau incomplete.</li>
                    <li className="mb-2">Dreptul la ștergere: să solicitați ștergerea datelor atunci când nu mai sunt necesare sau prelucrarea lor este ilegală.</li>
                    <li className="mb-2">Dreptul la restricționare: să solicitați limitarea prelucrării în anumite circumstanțe.</li>
                    <li className="mb-2">Dreptul la portabilitatea datelor: să primiți datele într-un format structurat și să le transmiteți altui operator.</li>
                    <li className="mb-2">Dreptul la opoziție: să vă opuneți prelucrării datelor în baza interesului legitim.</li>
                </ul>
                <p className="mb-4">Pentru a vă exercita aceste drepturi, vă rugăm să ne contactați la <a href="mailto:contact@tukteil.ro" className="text-blue-500">contact@tukteil.ro</a>.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">7. Politica de Cookie-uri</h2>
                <p className="mb-4">Utilizăm cookie-uri pentru a îmbunătăți experiența utilizatorilor pe site-ul nostru. Pentru detalii suplimentare, vă rugăm să consultați Politica noastră de Cookie-uri.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">8. Modificări ale Politicii de Confidențialitate</h2>
                <p className="mb-4">Ne rezervăm dreptul de a actualiza această politică de confidențialitate periodic. Orice modificare va fi publicată pe această pagină, iar utilizarea continuă a site-ului implică acceptarea modificărilor.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
                <p className="mb-4">Pentru întrebări sau solicitări privind această politică de confidențialitate, vă rugăm să ne contactați la <a href="mailto:contact@tukteil.ro" className="text-blue-500">contact@tukteil.ro</a>.</p>
                <p className="text-sm text-gray-600">Acest document a fost actualizat ultima dată la 19 ianuarie 2025.</p>
            </section>
        </div>
    );
};

export default Gdpr;