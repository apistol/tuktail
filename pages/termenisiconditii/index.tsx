import React from 'react';
import "../../App.css";

const Termenisiconditii = () => {
    return (
        <div style={{ padding: "30px"}}>
            <h1 className="text-3xl font-bold mb-5">TERMENI ȘI CONDIȚII</h1>
            <p className="text-sm text-gray-500 mb-5">Ultima actualizare 07.02.2025</p>

            <h2 className="text-2xl font-semibold mb-3">1. Introducere si scopul documentului</h2>
            <p className="mb-5">
                Bun venit la <span className="font-bold">www.tukteil.ro</span>! Acest document stabileste termenii si
                conditiile generale aplicabile utilizarii serviciilor oferite de Society DXB SRL, o societate comerciala
                specializata in distributia si servirea bauturilor alcoolice si non-alcoolice pentru evenimente
                stradale, evenimente private si corporate. Prin utilizarea serviciilor noastre, confirmati ca:
            </p>
            <ul className="list-disc list-inside mb-5">
                <li>aveti varsta legala pentru consumul de alcool conform legislatiei din Romania;</li>
                <li>sunteti de acord cu acesti Termeni si Conditii;</li>
                <li>va angajati sa respectati legislatia aplicabila privind consumul bauturilor alcoolice.</li>
            </ul>
            <p className="mb-5">
                Acesti termeni se aplica tuturor Clientilor si Beneficiarilor serviciilor Society DXB SRL, indiferent de
                tipul evenimentului organizat. In cazul unor contradictii intre prezentul document si contractele
                individuale, prevederile contractuale specifice vor prevala.
            </p>

            <h2 className="text-2xl font-semibold mb-3">2. Definitii si termeni</h2>
            <p className="mb-5">
                Pentru o mai buna intelegere a prezentului document, termenii utilizati sunt definiti astfel:
            </p>
            <ul className="list-disc list-inside mb-5">
                <li><span className="font-bold">Society DXB SRL</span> – Societatea comerciala inregistrata in Romania,
                    care furnizeaza servicii de distributie si servire de bauturi alcoolice si non-alcoolice pentru
                    evenimente private, denumita in continuare Furnizor.
                </li>
                <li><span className="font-bold">Client</span> – Persoana fizica sau juridica care incheie un contract cu
                    Society DXB SRL pentru utilizarea serviciilor sale.
                </li>
                <li><span className="font-bold">Beneficiar</span> – Persoana fizica sau juridica in beneficiul careia
                    sunt prestate serviciile.
                </li>
                <li><span className="font-bold">Servicii</span> – Activitatile desfasurate de Society DXB SRL,
                    incluzand:
                    <ul className="list-disc list-inside ml-5">
                        <li>furnizarea bauturilor alcoolice si non-alcoolice;</li>
                        <li>personal calificat pentru servire;</li>
                        <li>consultanta pentru selectia bauturilor;</li>
                        <li>logistica (baruri mobile, pahare etc.).</li>
                    </ul>
                </li>
                <li><span className="font-bold">Eveniment privat</span> – Reuniune desfasurata intr-un cadru restrans,
                    fara acces public, pentru care Society DXB SRL presteaza servicii.
                </li>
                <li><span className="font-bold">Contract</span> – Acordul scris sau electronic dintre Society DXB SRL si
                    Client, care stabileste conditiile prestarii serviciilor.
                </li>
                <li><span className="font-bold">Forta Majora</span> – Eveniment imprevizibil si inevitabil, care
                    impiedica partial sau total executarea obligatiilor contractuale (ex.: dezastre naturale, pandemii,
                    restrictii legale).
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3">3. Eligibilitate si conditii de utilizare a serviciilor</h2>
            <h3 className="text-xl font-semibold mb-2">3.1. Eligibilitate</h3>
            <p className="mb-5">
                Serviciile Society DXB SRL sunt disponibile doar pentru persoanele care au implinit varsta de 18 ani,
                conform Legii nr. 61/1991 privind sanctionarea faptelor de incalcare a normelor de convietuire sociala.
                Clientii sunt responsabili sa asigure respectarea legislatiei in ceea ce priveste consumul de alcool la
                evenimentele organizate.
            </p>
            <h3 className="text-xl font-semibold mb-2">3.2. Restrictii de utilizare</h3>
            <p className="mb-5">
                Este interzisa redistribuirea bauturilor furnizate de Society DXB SRL in afara cadrului specificat in
                contract.
                Society DXB SRL isi rezerva dreptul de a refuza prestarea serviciilor in cazul:
            </p>
            <ul className="list-disc list-inside mb-5">
                <li>furnizarii de informatii false sau incomplete de catre Client;</li>
                <li>nerespectarii termenilor contractuali sau a legislatiei in vigoare.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3">4. Rezervarea si confirmarea serviciilor</h2>
            <h3 className="text-xl font-semibold mb-2">4.1. Procesul de rezervare in detaliu</h3>
            <p className="mb-5">
                Rezervarea serviciilor Society DXB SRL este esentiala pentru buna organizare si personalizarea
                serviciilor oferite. Procesul de rezervare se desfasoara astfel:
            </p>
            <ul className="list-decimal list-inside mb-5">
                <li><span className="font-bold">Contact initial:</span>
                    <ul className="list-disc list-inside ml-5">
                        <li>Clientul contacteaza Society DXB SRL prin intermediul e-mailului, telefonului sau
                            formularului de pe site-ul oficial.
                        </li>
                        <li>Clientul ofera informatii preliminare despre eveniment (data, locatia, tipul de eveniment,
                            numarul estimat de participanti).
                        </li>
                    </ul>
                </li>
                <li><span className="font-bold">Consultanta personalizata:</span>
                    <ul className="list-disc list-inside ml-5">
                        <li>Echipa Society DXB SRL discuta in detaliu cerintele Clientului, oferind sugestii pentru
                            selectia bauturilor si structura serviciilor.
                        </li>
                        <li>In cazul in care Clientul doreste personalizare suplimentara (ex. cocktail-uri unice pentru
                            eveniment), aceste detalii vor fi incluse in oferta.
                        </li>
                    </ul>
                </li>
                <li><span className="font-bold">Emiterea ofertei:</span>
                    <ul className="list-disc list-inside ml-5">
                        <li>In urma consultantei, Society DXB SRL intocmeste o oferta personalizata care include:</li>
                        <li>Preturile si serviciile detaliate.</li>
                        <li>Termenele si conditiile specifice (ex. plata avansului, durata prestarii serviciilor).</li>
                    </ul>
                </li>
                <li><span className="font-bold">Semnarea contractului:</span>
                    <ul className="list-disc list-inside ml-5">
                        <li>Oferta devine ferma dupa acceptarea ei de catre Client si semnarea contractului.</li>
                        <li>In contract sunt incluse si detalii precum:</li>
                        <li>Programul evenimentului.</li>
                        <li>Locatia exacta.</li>
                        <li>Responsabilitatile partilor (Society DXB SRL si Client).</li>
                    </ul>
                </li>
                <li><span className="font-bold">Confirmarea rezervarii:</span>
                    <ul className="list-disc list-inside ml-5">
                        <li>O rezervare este considerata finalizata si confirmata doar dupa:</li>
                        <li>Achitarea avansului (daca este specificat in contract).</li>
                        <li>Semnarea contractului de ambele parti.</li>
                    </ul>
                </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">4.2. Modificarea rezervarii</h3>
            <p className="mb-5">
                Clientul poate solicita modificari ale detaliilor initiale (ex. numarul de participanti, modificarea
                locatiei) cu cel putin 72 de ore inainte de eveniment.
                Modificarile vor fi confirmate in scris de catre Society DXB SRL si pot implica costuri suplimentare, in
                functie de natura schimbarilor.
            </p>
            <h3 className="text-xl font-semibold mb-2">4.3. Disponibilitatea serviciilor</h3>
            <p className="mb-5">
                Serviciile Society DXB SRL sunt oferite in limita disponibilitatii personalului si a stocurilor de
                bauturi.
            </p>

            <h2 className="text-2xl font-semibold mb-3">5. Responsabilitati ale Clientului si ale Society DXB SRL</h2>
            <h3 className="text-xl font-semibold mb-2">5.1. Obligatiile Clientului</h3>
            <p className="mb-5">
                Clientul trebuie sa asigure:
            </p>
            <ul className="list-disc list-inside mb-5">
                <li>un spatiu adecvat pentru desfasurarea serviciilor, care respecta normele de siguranta si igiena;
                </li>
                <li>respectarea legislatiei cu privire la consumul de alcool de catre participanti (interzicerea
                    consumului de alcool de catre minori).
                </li>
                <li>Clientul raspunde pentru eventualele deteriorari ale echipamentelor furnizate de Society DXB SRL.
                </li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">5.2. Obligatiile Society DXB SRL</h3>
            <p className="mb-5">
                Society DXB SRL se angajeaza sa presteze servicii la standardele agreate prin contract.
                Personalul Society DXB SRL este instruit sa refuze servirea persoanelor aflate in stare avansata de
                ebrietate sau a minorilor, in conformitate cu legislatia in vigoare.
            </p>

            <h2 className="text-2xl font-semibold mb-3">6. Politica de plata si anulare</h2>
            <h3 className="text-xl font-semibold mb-2">6.1. Detalierea tarifelor</h3>
            <p className="mb-5">
                Preturile sunt stabilite in functie de:
            </p>
            <ul className="list-disc list-inside mb-5">
                <li>Tipul de eveniment (corporate, nunta, petrecere privata).</li>
                <li>Numarul estimat de participanti.</li>
                <li>Selectia bauturilor si cerintele suplimentare (ex. barmani, decor personalizat).</li>
                <li>Ofertele personalizate sunt valabile timp de 10 zile calendaristice de la emitere.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">6.2. Politica de plata</h3>
            <p className="mb-5">
                <span className="font-bold">Avansul:</span>
                Se solicita un avans de minim 20% din valoarea totala a serviciilor la semnarea contractului.
                Avansul asigura blocarea resurselor pentru eveniment.
            </p>
            <p className="mb-5">
                <span className="font-bold">Plata finala:</span>
                Diferenta de plata trebuie achitata in cel mult 48 de ore la terminarea evenimentului.
            </p>
            <p className="mb-5">
                <span className="font-bold">Metode de plata acceptate:</span>
            </p>
            <ul className="list-disc list-inside mb-5">
                <li>Transfer bancar (cu confirmarea platii prin e-mail).</li>
                <li>Plata cu cardul prin POS.</li>
                <li>Numerar (in conditiile legislatiei in vigoare).</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">6.3. Politica de anulare</h3>
            <p className="mb-5">
                <span className="font-bold">Anulari cu mai mult de 5 zile inainte de eveniment:</span>
                Avansul este rambursabil integral, mai putin taxele bancare sau administrative (daca este cazul).
            </p>
            <p className="mb-5">
                <span className="font-bold">Anulari cu mai putin de 5 zile inainte de eveniment:</span>
                Avansul nu este rambursabil.
                Clientul poate, insa, sa replanifice serviciile pentru o data ulterioara, in functie de disponibilitatea
                Society DXB SRL.
            </p>
            <p className="mb-5">
                <span className="font-bold">Anulari cauzate de Forta Majora:</span>
                In situatii imprevizibile (ex. pandemie, dezastre naturale), avansul poate fi utilizat pentru o
                reprogramare ulterioara, conform unui acord scris.
            </p>

            <h2 className="text-2xl font-semibold mb-3">7. Livrarea si prestarea serviciilor</h2>
            <h3 className="text-xl font-semibold mb-2">7.1. Livrarea bauturilor si echipamentelor</h3>
            <p className="mb-5">
                Society DXB SRL asigura livrarea bauturilor, echipamentelor si accesoriilor necesare (ex. baruri mobile,
                pahare, mixere) la locatia specificata de Client.
                Livrarea este inclusa in tariful serviciilor, in limita unei raze de 50 km de la sediul Society DXB SRL.
                Pentru locatiile mai indepartate, se aplica un cost suplimentar de transport.
            </p>
            <h3 className="text-xl font-semibold mb-2">7.2. Personal specializat</h3>
            <p className="mb-5">
                Society DXB SRL asigura personal instruit pentru servirea bauturilor, inclusiv:
            </p>
            <ul className="list-disc list-inside mb-5">
                <li>Barmani profesionisti.</li>
                <li>Personal auxiliar (pentru pregatirea si servirea bauturilor).</li>
                <li>Hostess (la cerere).</li>
            </ul>
            <p className="mb-5">
                Personalul este responsabil de:
            </p>
            <ul className="list-disc list-inside mb-5">
                <li>Pregatirea cocktail-urilor sau a altor bauturi speciale conform cerintelor Clientului.</li>
                <li>Respectarea standardelor de siguranta si igiena.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">7.3. Setarea locatiei</h3>
            <p className="mb-5">
                Society DXB SRL va colabora cu Clientul pentru stabilirea locatiei exacte a echipamentelor.
                Echipamentele vor fi amplasate astfel incat sa asigure o experienta placuta participantilor si sa
                respecte normele de siguranta.
            </p>
            <h3 className="text-xl font-semibold mb-2">7.4. Ridicarea echipamentelor dupa eveniment</h3>
            <p className="mb-5">
                Dupa finalizarea evenimentului, Society DXB SRL este responsabil de colectarea echipamentelor furnizate.
                Clientul este obligat sa returneze echipamentele in starea in care au fost livrate, in caz contrar,
                acesta fiind responsabil pentru daune.
            </p>

            <h2 className="text-2xl font-semibold mb-3">8. Limitarea raspunderii</h2>
            <h3 className="text-xl font-semibold mb-2">8.1. Situatii in care Society DXB SRL nu poate fi tras la
                raspundere</h3>
            <p className="mb-5">
                Consumul excesiv de alcool de catre participantii la eveniment.
                Deciziile Clientului de a distribui bauturile furnizate in moduri care contravin legislatiei.
                Evenimente neprevazute (ex. defecte ale echipamentului din cauza manipularii incorecte de catre Client).
            </p>
            <h3 className="text-xl font-semibold mb-2">8.2. Asigurarea calitatii</h3>
            <p className="mb-5">
                Society DXB SRL garanteaza calitatea bauturilor furnizate, dar nu isi asuma raspunderea pentru gusturi
                sau preferinte subiective.
            </p>

            <h2 className="text-2xl font-semibold mb-3">9. Politica de confidentialitate</h2>
            <p className="mb-5">
                Society DXB SRL respecta Regulamentul General privind Protectia Datelor (GDPR) si se angajeaza sa
                protejeze
                confidentialitatea si securitatea datelor personale furnizate de Clienti.
            </p>

            <h2 className="text-2xl font-semibold mb-3">10. Drepturile de autor si proprietatea intelectuala</h2>
            <h3 className="text-xl font-semibold mb-2">10.1. Drepturile de autor asupra continutului</h3>
            <p className="mb-5">
                Toate materialele, denumirile comerciale, logo-urile, descrierile serviciilor, design-urile si
                elementele
                vizuale asociate Society DXB SRL sunt protejate de Legea nr. 8/1996 privind dreptul de autor si
                drepturile
                conexe, cu modificarile si completarile ulterioare.
                Orice utilizare a acestora (copiere, reproducere, distribuire, modificare, afisare publica, vanzare sau
                utilizare comerciala) fara acordul scris al Society DXB SRL este strict interzisa si poate atrage
                raspunderea civila sau penala.
            </p>
            <h3 className="text-xl font-semibold mb-2">10.2. Licentiere limitata</h3>
            <p className="mb-5">
                Utilizatorii serviciilor noastre primesc o licenta limitata, neexclusiva si netransferabila, pentru
                utilizarea materialelor si informatiilor oferite strict in scopuri legate de colaborarea cu Society DXB
                SRL.
            </p>
            <h3 className="text-xl font-semibold mb-2">10.3. Proprietatea intelectuala terta</h3>
            <p className="mb-5">
                Society DXB SRL respecta toate drepturile de autor si proprietatea intelectuala a tertilor. In cazul in
                care, pe parcursul furnizarii serviciilor, sunt utilizate produse sau materiale ce apartin unor terte
                parti,
                acestea vor fi mentionate si utilizate in conformitate cu acordurile incheiate cu detinatorii de
                drepturi.
            </p>

            <h2 className="text-2xl font-semibold mb-3">11. Dispozitii finale</h2>
            <h3 className="text-xl font-semibold mb-2">11.1. Modificarea termenilor si conditiilor</h3>
            <p className="mb-5">
                Society DXB SRL isi rezerva dreptul de a modifica acesti termeni si conditii oricand, cu notificarea
                prealabila a Clientilor. Versiunea actualizata va fi publicata pe website-ul oficial.
            </p>
            <h3 className="text-xl font-semibold mb-2">11.2. Solutionarea litigiilor</h3>
            <p className="mb-5">
                Litigiile aparute in legatura cu acesti Termeni si Conditii sau cu serviciile Society DXB SRL vor fi
                solutionate pe cale amiabila.
                In cazul in care o solutionare amiabila nu este posibila, litigiile vor fi solutionate de instantele
                competente din Romania, in raza teritoriala in care Society DXB SRL are sediul social.
            </p>
            <h3 className="text-xl font-semibold mb-2">11.3. Contact</h3>
            <p className="mb-5">
                Pentru orice intrebari legate de acesti Termeni si Conditii sau de serviciile noastre, ne puteti
                contacta
                la:
            </p>
            <p className="mb-5">
                E-mail: tukteiloffice@gmail.com<br/>
                Telefon: 0768.814.320
            </p>

        </div>
    );
};

export default Termenisiconditii;