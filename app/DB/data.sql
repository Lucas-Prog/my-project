CREATE TABLE IF NOT EXISTS pecas(
    -- id INTEGER PRIMARY KEY AUTOINCREMENT,
    product TEXT not NULL,
    type INTEGER not null,
    prov INTEGER not null,
    qtd INTEGER not null,
    date TEXT not null
);

SELECT rowid, * FROM pecas;

INSERT INTO pecas VALUES ( "ppr", 1, 2, "25/10/2023");

DROP Table pecas;