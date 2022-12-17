1. Pagina de inregistrare
   1.1 Forma pentru a introduce datele sa fie posibilitate de a se inregistra
   1.2 De salvat datele in localStorage
   1.3 De redirectionat pe pagina /login.html
   1.4 Toate chimpurile sint obligatorii(nume, email, parola)
   1.5 Daca unu nui introdus sa afisam eroare
2. Pagina de login
   1.1 De creat o forma pentru a introduce emailu si parola
   1.2 De luat datele din local storage si de le comparat
   1.3 Daca nu is introduse datele corect de afisat eroare
   1.4 Daca useru exista si datele is corecte atunci de redirectionat pe /index.html
3. Pagina magazinului
   3.1 De afisat pe pagina produsele
   3.2 Fiecare produs sa aiba pret, buton de adaugat de scazut cantitatea, buton de adaugat in cos
   3.2.1 Butonul cu scaderea cantitaii sa nu scada mai jos de 1
   3.3 De realizat cosul
   3.4 Cosul by default trebuie numai sa vizualizeze cite produse avem in cos
   3.4 Chind apasam pe buton produse in cos sa arate popup
   3.4.1 Daca nu avem produs in cos sa fie text ca cosul e gol
   3.5 Daca produse sint adaugate atunci popup sa aiba descriere detaliata:
   3.5.1 Chite produse
   3.5.2 Pretul produsului
   3.5.3 Pretul total cantitatea produs \* pret
   3.5.4 Pretul total a cosului cu produse
   3.6 Butonul checkout sau finisati comanda
   3.7 Apasand pe butonul checkout sa fim redirectionati pe pagina de finalizare a comenzii
4. Pagina de finalizare a comenzii
   4.1 Tabel cu toate produsele adaugate
   4.2 Denumirea, cantitatea,pretul si totalul
   4.3 Sub tabel sa fie un text unde este afisat cite produse is in cos si pretul lor total
   4.4 Buttonul achita produsele
   4.5 Dupa ce sa apasat butonul achita, sa fie redirectionat pe pagina cu produse(pagina /index.html)
   4.6 Toate produsele sa fie sterse din localStorage

P.S A interzice accessul pe pagina /index.html daca nu esti inregistrat. Fiecare access trebuie sa te redirectioneze pe pagina /register.html
