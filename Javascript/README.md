# JavaScript

## Innehåll

1. [Testmiljö](#0-testmiljö)
2. [Variabler](#11-variabler)
3. [Datatyper](#12-datatyper)
4. [Operatorer](#13-operatorer)
5. [Jämförelser](#14-jämförelser)
6. [If-satser](#15-if-satser)
7. [Loopar: while & for](#16-loopar-while-och-for)
8. [Switch](#17-switch-satsen)
9. [Funktioner](#18-funktioner)
10. [Arrow-funktioner](#19-arrow-functions-pil-funktioner)
11. [Objekt](#110-objekt)
12. [Listor/Arrays](#111-listor-arrays)

## Introduktion

JavaScript är programmeringsspråket som körs i webbapplikationer och används för att kontrollera webbläsaren, vilket resulterar i mer interaktiva webbsidor. På senare tid använder man även JavaScript utanför webbläsaren, som t.ex. mobilappar och serverapplikationer. Instagram och Facebook är exempel på mobilappar som är utvecklade med JavaScript.

### Vad är JavaScript?

> **JavaScript** (förkortat JS) är ett prototyp-baserat skriptspråk som är dynamiskt, svagt typat och hanterar funktioner som första-klass-objekt. JavaScript används främst på klientsidan i webbtillämpningar och exekveras i webbläsarens JavaScript-motor.
>
> Vanligtvis inbäddas JavaScript i, eller inkluderas från, HTML-sidor. Exempel på användningsområden är kontroll av ifyllda fält innan formulär skickas till en server, funktioner för att visa eller dölja delar av en sida och växling av annonsbilder med visst intervall.
>
> JavaScript kan även användas för mer avancerade funktioner såsom spel och bildbehandling. Utanför webbläsaren används JavaScript i t.ex. Node.js för serverutveckling.

### Kursinformation

- **Mål:** Lära dig grunderna i JavaScript programmering
- **Metod:** Kombination av teori, praktiska övningar och projekt
- **Resurser:** Text, videor och hands-on kodning
- **Tips:** Våga testa, experimentera och fråga om hjälp!

### Huvudresurser

- 📚 [W3Schools JavaScript](https://www.w3schools.com/js/default.asp)
- 🎥 [Modern JavaScript - The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc)

---

## 0. Testmiljö

Det finns flera sätt att testa JavaScript-kod. Här är två rekommenderade metoder:

### Metod 1: Lokal utvecklingsmiljö

1. **Skapa mappstruktur:**

   - Skapa en mapp t.ex. `C:/programmering/javascript`
   - Öppna mappen i Visual Studio Code

2. **Skapa testfil:**
   - Skapa en fil med namnet `test.html`
   - Lägg till följande kod:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Test</title>
  </head>
  <body>
    <h1>JavaScript Test</h1>

    <script>
      let x = 5;
      console.log(x);
      // Skriv din JavaScript-kod här
    </script>
  </body>
</html>
```

3. **Testa koden:**
   - Öppna `test.html` i webbläsaren
   - Tryck `F12` för att öppna Developer Tools
   - Gå till **Console**-fliken för att se resultatet

### Metod 2: Online-miljö

Använd en online-editor för snabba tester:

- 🔗 [Plunker](https://plnkr.co/edit/9OnAVyIK7Tk1cP6d)
- 🔗 [CodePen](https://codepen.io)
- 🔗 [JSFiddle](https://jsfiddle.net)

---

## 1.1 Variabler

Variabler används för att lagra data som kan användas och ändras i ditt program.

### 📚 Resurser

- [W3Schools - JavaScript Variables](https://www.w3schools.com/js/js_variables.asp)

### 📝 Övningsuppgifter

- [Övningar Variabler](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#11-variabler)

## 1.2 Datatyper

JavaScript har flera olika datatyper för att lagra olika sorters information.

### 📚 Resurser

- [W3Schools - JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp)

### 📝 Övningsuppgifter

- [Övningar Datatyper](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#%C3%B6vningsuppgifter-1)

## 1.3 Operatorer

Operatorer används för att utföra beräkningar och jämförelser mellan variabler och värden.

### 📚 Resurser

- [W3Schools - JavaScript Operators](https://www.w3schools.com/js/js_operators.asp)

### 📝 Övningsuppgifter

- [Övningar Operatorer](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#13-operatorer)

## 1.4 Jämförelser

Jämförelseoperatorer används för att jämföra värden och returnerar true eller false.

### 📚 Resurser

- [W3Schools - JavaScript Comparisons](https://www.w3schools.com/js/js_comparisons.asp)

### 📝 Övningsuppgifter

- [Övningar Jämförelser](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#%C3%B6vningsuppgifter-3)

## 1.5 If-satser

If-satser används för att köra kod endast under vissa villkor.

### 📚 Resurser

- [W3Schools - JavaScript If...Else](https://www.w3schools.com/js/js_if_else.asp)

### 📝 Övningsuppgifter

- [Övningar If-satser](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#%C3%B6vningsuppgifter-4)

## 1.6 Loopar: while och for

Loopar används för att upprepa kod flera gånger under kontrollerade villkor.

### 📚 Resurser

- [W3Schools - JavaScript For Loops](https://www.w3schools.com/js/js_loop_for.asp)
- [W3Schools - JavaScript While Loops](https://www.w3schools.com/js/js_loop_while.asp)

### 📝 Övningsuppgifter

- [Övningar Loopar: while och for](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#%C3%B6vningsuppgifter-5)

## 1.7 Switch-satsen

Switch-satsen är ett alternativ till if-else när du vill jämföra en variabel mot många olika värden.

### 📚 Resurser

- [W3Schools - JavaScript Switch Statement](https://www.w3schools.com/js/js_switch.asp)

### 📝 Övningsuppgifter

- [Övningar Switch-satsen](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#%C3%B6vningsuppgifter-6)

## 1.8 Funktioner

Funktioner är återanvändbara kodblock som utför specifika uppgifter.

### 📚 Resurser

- [W3Schools - JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)

### 📝 Övningsuppgifter

- [Övningar Funktioner](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#%C3%B6vningsuppgifter-7)

## 1.9 Arrow functions (pil-funktioner)

Arrow functions är en kortare syntax för att skriva funktioner i JavaScript.

### 📚 Resurser

- [W3Schools - JavaScript Arrow Functions](https://www.w3schools.com/js/js_arrow_function.asp)

### 📝 Övningsuppgifter

- [Övningar Arrow functions](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#%C3%B6vningsuppgifter-8)

## 1.10 Objekt

Objekt är samlingar av egenskaper och metoder som representerar verkliga eller abstrakta ting.

### 📚 Resurser

- [W3Schools - JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)

### 📝 Övningsuppgifter

- [Övningar Objekt](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#%C3%B6vningsuppgifter-9)

## 1.11 Listor (Arrays)

Arrays är listor som kan lagra flera värden i en enda variabel.

### 📚 Resurser

- [W3Schools - JavaScript Arrays](https://www.w3schools.com/js/js_arrays.asp)

### 📝 Övningsuppgifter

- [Övningar Arrays](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#%C3%B6vningsuppgifter-10)
