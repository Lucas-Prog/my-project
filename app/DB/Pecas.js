import db from "./DB";


db.transaction(tx =>{
    // console.log("Iniciando a transaction;");
    tx.executeSql("DROP TABLE Pecas;", [],
    (tx, resultSet) =>{ console.log(`dropando a tabela:  ${JSON.stringify(resultSet)}`)},
    (tx, error) =>{ console.log(`Deu merda dropando a tabela: ${error}`)});
    // console.log("passei aqui");
    
    tx.executeSql("CREATE TABLE IF NOT EXISTS Pecas(product TEXT not NULL, type INTEGER not null, prov TEXT not NULL, qtd INTEGER not null, date TEXT not null);", [],
    (tx, resultSet) => { console.log(`Criando o banco: ${JSON.stringify(resultSet)}`)},
    (tx, error) => { console.log(`Deu merda criando o banco: ${error}`)})
    // console.log("e aqui tbm");


    // tx.executeSql("INSERT INTO Pecas (product, type, prov, qtd, date) VALUES (?, ?, ?, ?, ? );", ["protocolo", 1, 1, 2, "7/11/2023"]);
    // tx.executeSql("INSERT INTO Pecas (product, type, prov, qtd, date) VALUES (?, ?, ?, ?, ? );", ["PPR", 0, 1, 1, "7/11/2023"]);
    // tx.executeSql("INSERT INTO Pecas (product, type, prov, qtd, date) VALUES (?, ?, ?, ?, ? );", ["PT", 1, 1, 1, "7/11/2023"]);
    // tx.executeSql("INSERT INTO Pecas (product, type, prov, qtd, date) VALUES (?, ?, ?, ?, ? );", ["protocolo", 1, 1, 2, "7/11/2023"]);
    // tx.executeSql("INSERT INTO Pecas (product, type, prov, qtd, date) VALUES (?, ?, ?, ?, ? );", ["PT", 1, 1, 2, "7/11/2023"]);
    // tx.executeSql("INSERT INTO Pecas (product, type, prov, qtd, date) VALUES (?, ?, ?, ?, ? );", ["PM", 1, 1, 3, "7/11/2023"]);
    // tx.executeSql("INSERT INTO Pecas (product, type, prov, qtd, date) VALUES (?, ?, ?, ?, ? );", ["PPR", 0, 1, 2, "7/11/2023"]);
    // tx.executeSql("INSERT INTO Pecas (product, type, prov, qtd, date) VALUES (?, ?, ?, ?, ? );", ["protocolo", 1, 1, 2, "7/11/2023"]);
    // tx.executeSql("INSERT INTO Pecas (product, type, prov, qtd, date) VALUES (?, ?, ?, ?, ? );", ["protocolo", 1, 1, 2, "7/11/2023"]);
    // tx.executeSql("INSERT INTO Pecas (product, type, prov, qtd, date) VALUES (?, ?, ?, ?, ? );", ["PT", 1, 1, 2, "7/11/2023"]);
    // tx.executeSql("INSERT INTO Pecas (product, type, prov, qtd, date) VALUES (?, ?, ?, ?, ? );", ["PT", 1, 1, 2, "7/11/2023"]);
    // tx.executeSql("INSERT INTO Pecas (product, type, prov, qtd, date) VALUES (?, ?, ?, ?, ? );", ["PPR", 0, 1, 2, "7/11/2023"]);
});

const INSERT = (obj) =>{
    
    // OpenDb();
    return new Promise( (resolve, reject) =>{

        db.transaction(tx =>{
            tx.executeSql("INSERT INTO Pecas (product, type, prov, qtd, date) VALUES (?, ?, ?, ?, ? );", [obj.product, obj.type, obj.prov, obj.qtd, obj.date],
                (_, {rowsAffected, insertId}) =>{
                    if(rowsAffected > 0) {resolve(insertId); console.log(`Rows Affected: ${insertId}`);}
                    else {reject(`Error inserting obj: ${obj}`); console.log("deu ruim aqui");}
                },
                (_, error) => reject(error)
            )
        })
        
        console.log('consultando banco');
        console.log(SelectAll);
    })
}

const SelectAll =  
    new Promise( (resolve, reject) =>{
        db.transaction(tx =>{
            tx.executeSql("SELECT rowid, * FROM Pecas;", [],
                (_, response) => resolve(response.rows._array),
                (_, error) => reject(error)
            )
        })
    });

export { INSERT, SelectAll };