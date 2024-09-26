1. Использована библиотека OpenZeppelin ✔ 

    2. При деплое контракта происходит mint 100k токенов на все переданные в конструктор адреса (должен быть передан массив из нескольких адресов)✔ 

    3. Реализована функция \*_mint()_\*✔ 

        1. Принимает на вход в качестве параметров✔ 

            1. Адрес на которые необходимо заминтить токены✔ 

            2. Количество токенов, которые должны быть заминчены✔ 

        2. Суммарное количество всех токенов (total supply) не превышает лимит TOTAL_SUPPLY_LIMIT, указанный при деплое контракта✔ 

        3. Функция может быть вызвана только владельцем контракта✔ 

    4. Total supply токенов - 1000k✔ 

    5. Написаны юнит-тесты на все функции, которые реализуются в созданном смарт-контракте: 
            1.Каждому адресу, переданному в конструктор минтится 100к токенов ✔ 
            2.Владелец контракта может минтить токены в пределах установленного лимита ✔ 
            3.Количество наминченых токенов не должно превышать установленного лимита ✔ 
            4.Только владелец может чеканить токены ✔ 

    6. Необходимо задеплоить смарт-контракт токена в тестнет Ethereum - \*\*Sepolia\*\*

        1. RPC URL взять из Alchemy✔ 

        2. Тестнет ETH для Sepolia можно найти через запрос “sepolia faucet”✔ 
