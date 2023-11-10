CREATE TABLE IF NOT EXISTS pecas(
    -- id INTEGER PRIMARY KEY AUTOINCREMENT,
    product TEXT not NULL,
    type INTEGER not null,
    prov INTEGER not null,
    qtd INTEGER not null,
    date TEXT not null
);

SELECT rowid, * FROM pecas ORDER BY rowid DESC;

SELECT SUM(pecas.qtd) from pecas WHERE date LIKE "%10/2023%";

SELECT * FROM pecas ORDER BY rowid DESC LIMIT 1;

INSERT INTO pecas VALUES ( "ppr", 1, 2, "26/10/2023");

DROP Table pecas;