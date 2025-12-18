// 1. Оголошення констант згідно з Варіантом 1 [cite: 160]
const currency = "USD";          // Валюта: долар [cite: 161]
const date_from = "20220707";    // Дата початку: 7 липня 2022р [cite: 162]
const date_to = "20220719";      // Дата закінчення: 19 липня 2022p [cite: 163]

// 2. Створення об'єкта класу URL з базовою адресою НБУ [cite: 181, 182]
const nbuUrl = new URL("https://bank.gov.ua/NBU_Exchange/exchange_site");

// 3. Додавання параметрів запиту через SearchParams [cite: 183, 185]
nbuUrl.searchParams.append("valcode", currency);
nbuUrl.searchParams.append("start", date_from);
nbuUrl.searchParams.append("end", date_to);
nbuUrl.searchParams.append("sort", "exdate");
nbuUrl.searchParams.append("order", "desc");
nbuUrl.searchParams.append("json", ""); // Повертати дані у форматі JSON [cite: 138]

// 4. Виведення фінального URL у консоль [cite: 187]
console.log(nbuUrl.toString());