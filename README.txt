 1. Autor
- Mateusz Przybyło
  
2. Technologie

- Node.js
- Express.js
- MongoDB
- EJS (Embedded JavaScript Templates)
- Multer (upload plików)
- CSS (własny styl)


 3. Lista endpointów

| Metoda | Endpoint           | Opis                                       |
|--------|--------------------|--------------------------------------------|
| GET    | /                  | Strona główna, lista wszystkich wątków     |
| GET    | /create            | Formularz dodawania nowego wątku           |
| POST   | /create            | Dodanie nowego wątku                       |
| GET    | /edit/:id          | Formularz edycji wybranego wątku           |
| POST   | /edit/:id          | Zapis edycji wybranego wątku               |
| POST   | /delete/:id        | Usunięcie wybranego wątku                  |
| GET    | /blank             | Strona z wpisami Blank                     |
| GET    | /add-blank         | Formularz dodawania wpisu Blank            |
| POST   | /add-blank         | Dodanie wpisu Blank (z uploadem obrazka)   |
| GET    | /about             | Strona z opisem projektu                   |
4. Instrukcja instalacji i uruchomienia


    1. Zainstaluj Node.js 
    2. Zainstaluj i uruchom lokalnie MongoDB (domyślnie na `mongodb://localhost:27017`)
    3. Sklonuj repozytorium lub pobierz projekt
    4. W katalogu głównym uruchom:
	
	    npm install
	    
    5. Uruchom aplikację poleceniem:
	
	    npm start

    6. Otwórz przeglądarkę i przejdź do "http://localhost:3001"
 
 
 5. Funkcjonalność

- Przeglądanie wszystkich wątków (fanpage'y)
- Tworzenie nowych wątków
- Edytowanie i usuwanie istniejących wątków
- Sortowanie wątków według nazwy i statusu
- Przeglądanie strony "Blank" z wpisami i obrazkami
- Dodawanie nowych wpisów do strony "Blank" (z uploadem obrazka)
- Dynamiczne renderowanie widoków EJS
- Przesyłanie plików graficznych (Multer)

 6. Opis projektu

Projekt to proste forum internetowe stworzone dla użytkowników Discorda, umożliwiające tworzenie, edytowanie i usuwanie wątków (fanpage'y) oraz dodawanie specjalnych wpisów na stronie "Blank". Strona Blank to kolekcja zabawnych, błędnie zapisanych nazw postaci z gry League of Legends, tworzona przez naszego znajomego Blank, z możliwością dodania opisu i obrazka. Projekt demonstruje podstawowe operacje CRUD, upload plików oraz dynamiczne generowanie treści z użyciem Node.js, Express, EJS i MongoDB.
