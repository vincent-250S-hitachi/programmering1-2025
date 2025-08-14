# DOM (Document Object Model) Övningar

## Introduktion

Hittills har vi lärt oss HTML, CSS och JavaScript separat. Nu ska vi lära oss hur JavaScript kan **interagera med webbsidor** genom att manipulera HTML-element i realtid.

### Vad är DOM?

**DOM (Document Object Model)** är en programmeringsgränssnitt som representerar HTML-dokument som ett träd av objekt. Med DOM kan vi:

- 🔍 **Hitta** HTML-element
- ✏️ **Ändra** innehåll och attribut
- 🎨 **Modifiera** CSS-stilar
- ➕ **Lägga till** eller ta bort element
- 👂 **Lyssna** på användarinteraktioner (events)

### 📚 Huvudresurser

- [W3Schools JS HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
- [W3Schools JS Browser BOM](https://www.w3schools.com/js/js_window.asp)

## Instruktioner

**Filstruktur:**

1. Skapa HTML-filer för varje övning: `dom-övning1.html`, `dom-övning2.html`, etc.
2. Lägg JavaScript i `<script>`-taggar eller separata `.js`-filer
3. Testa alltid dina lösningar i webbläsaren (använd F12 för Developer Tools)
4. Ladda upp till GitHub när du är klar

---

## Övning 1 - DOM Element Selection

**Mål:** Lära dig olika sätt att hitta HTML-element med JavaScript.

### Del A: Klassiska DOM-metoder

**Uppgift:**

1. Skapa en HTML-sida med koden nedan
2. Använd följande metoder för att hitta element:
   - `document.getElementById()` för div-elementet
   - `document.getElementsByTagName()` för li-elementen
   - `document.getElementsByClassName()` för h4 och p-elementen
3. Skriv ut elementens `.nodeName` med `alert()`

### Del B: Moderna selektorer

**Uppgift:**

1. Gör samma sak som Del A men använd istället:
   - `document.querySelector()` för enskilda element
   - `document.querySelectorAll()` för flera element

**HTML-kod:**

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="myDiv">Users:</div>
    <ul>
      <li>John</li>
      <li>Pete</li>
    </ul>
    <h4 class="myClass">These were all the users</h4>
    <p class="myClass">Thanks for checking in</p>

    <script>
      // Din kod här
    </script>
  </body>
</html>
```

**Tips:**

- `querySelector()` använder CSS-selektorer: `#id`, `.class`, `tagname`
- `querySelectorAll()` returnerar en NodeList som du kan loopa igenom

---

## Övning 2 - Avancerad Element Selection

**Mål:** Träna på att hitta specifika element i mer komplexa HTML-strukturer.

**Uppgift:**
Använd HTML-koden nedan och skriv JavaScript för att hitta följande element:

1. **Tabellen** med `id="age-table"`
2. **Alla label-element** inuti tabellen (ska vara 3 stycken)
3. **Första td-elementet** i tabellen (med texten "Age")
4. **Formuläret** med `name="search"`
5. **Första input-elementet** i det formuläret
6. **Sista input-elementet** i det formuläret

**HTML-kod:**

```html
<!DOCTYPE html>
<html>
  <body>
    <form name="search">
      <label
        >Search the site:
        <input type="text" name="search" />
      </label>
      <input type="submit" value="Search!" />
    </form>

    <hr />

    <form name="search-person">
      Search the visitors:
      <table id="age-table">
        <tr>
          <td>Age:</td>
          <td id="age-list">
            <label>
              <input type="radio" name="age" value="young" />less than 18</label
            >
            <label>
              <input type="radio" name="age" value="mature" />18-50</label
            >
            <label>
              <input type="radio" name="age" value="senior" />more than
              50</label
            >
          </td>
        </tr>

        <tr>
          <td>Additionally:</td>
          <td>
            <input type="text" name="info[0]" />
            <input type="text" name="info[1]" />
            <input type="text" name="info[2]" />
          </td>
        </tr>
      </table>

      <input type="submit" value="Search!" />
    </form>

    <script>
      // Din kod här - hitta alla element enligt listan ovan
    </script>
  </body>
</html>
```

**Tips:**

- Använd `document.forms` för att hitta formulär
- `querySelector()` kan kombinera selektorer: `"table#age-table label"`
- `querySelectorAll()` + `[0]` och `[length-1]` för första/sista element

---

## Övning 3 - Data Attributes

**Mål:** Lära dig arbeta med HTML5 data-attribut.

**Uppgift:**

1. Hitta elementet med attributet `data-widget-name`
2. Skriv ut dess värde med `console.log()`
3. **Bonus:** Ändra värdet till något annat

**HTML-kod:**

```html
<!DOCTYPE html>
<html>
  <body>
    <div data-widget-name="menu">Choose the genre</div>

    <script>
      // Din kod här
    </script>
  </body>
</html>
```

**Tips:**

- Använd `querySelector('[data-widget-name]')` för att hitta elementet
- Använd `.getAttribute('data-widget-name')` för att läsa värdet
- Använd `.setAttribute('data-widget-name', 'nytt-värde')` för att ändra

---

## Övning 4 - Styla Externa Länkar

**Mål:** Lära dig manipulera CSS-stilar med JavaScript baserat på villkor.

**Uppgift:**
Gör alla externa länkar orange genom att ändra deras `style`-egenskap.

**Definition av extern länk:**
En länk är extern om dess `href`-attribut innehåller `://`

**Steg för steg:**

1. Hämta alla `<a>`-element med `querySelectorAll()`
2. Loopa igenom dem med en `for`-loop
3. Kontrollera om `href`-attributet innehåller `://` (använd `.includes()`)
4. Om ja: sätt `style.color = 'orange'`

**HTML-kod:**

```html
<!DOCTYPE html>
<html>
  <body>
    <a name="list">the list</a>
    <ul>
      <li><a href="http://google.com">http://google.com</a></li>
      <li><a href="/tutorial">/tutorial.html</a></li>
      <li><a href="local/path">local/path</a></li>
      <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
      <li><a href="http://nodejs.org">http://nodejs.org</a></li>
      <li><a href="http://internal.com/test">http://internal.com/test</a></li>
    </ul>

    <script>
      // Din kod här
    </script>
  </body>
</html>
```

**Resultat ska se ut så här:**
![Externa länkar i orange](https://github.com/abbjoafli/Programmering-1/blob/master/1.Javascript/%C3%B6vningar/DOM_2_4.PNG)

**Tips:**

- `element.href` ger dig href-attributets värde
- `string.includes('://')` returnerar `true` eller `false`
- `element.style.color = 'orange'` ändrar textfärgen
