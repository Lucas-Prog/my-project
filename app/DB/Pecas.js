import db from "./DB";


db.transaction(tx =>{
    // console.log("Iniciando a transaction;");
    // tx.executeSql("DROP TABLE Pecas;", [],
    // (tx, resultSet) =>{ console.log(`dropando a tabela:  ${JSON.stringify(resultSet)}`)},
    // (tx, error) =>{ console.log(`Deu merda dropando a tabela: ${error}`)});
    // console.log("passei aqui");
    
    tx.executeSql("CREATE TABLE IF NOT EXISTS Pecas(product TEXT not NULL, type INTEGER not null, prov TEXT not NULL, qtd INTEGER not null, date TEXT not null);", [],
    (tx, resultSet) => { console.log(`Criando o banco`)},
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
    // tx.executeSql("INSERT INTO Pecas (product, type, prov, qtd, date) VALUES (?, ?, ?, ?, ? );", ["PPR", 0, 1, 2, "7/08/2023"]);
    // tx.executeSql("INSERT INTO Pecas (product, type, prov, qtd, date) VALUES (?, ?, ?, ?, ? );", ["PPR", 0, 1, 2, "7/08/2023"]);
    // tx.executeSql("INSERT INTO Pecas (product, type, prov, qtd, date) VALUES (?, ?, ?, ?, ? );", ["PPR", 0, 1, 2, "7/08/2023"]);
});

const Insert = (obj) =>{
    
    // OpenDb();
    return new Promise( (resolve, reject) =>{

        db.transaction(tx =>{
            tx.executeSql("INSERT INTO Pecas (product, type, prov, qtd , date) VALUES (?, ?, ?, ?, ? );", [obj.product, obj.type, obj.prov, obj.qtd, obj.date],
                (tx, {rowsAffected, insertId}) =>{
                    if(rowsAffected > 0) {resolve(insertId); console.log(`Rows Affected: ${insertId}`);}
                    else {reject(`Error inserting obj: ${obj}`); console.log("deu ruim aqui");}
                },
                (tx, error) => reject(error)
            )
        })
        
        // console.log('consultando banco');
        // console.log(SelectAll);
    });
}

const GetId = (id) =>{
    return new Promise( (resolve, reject) =>{
        db.transaction( tx =>{
            tx.executeSql("SELECT * FROM Pecas WHERE rowid = (?)", [id],
                (_, resultSet => {resolve(resultSet)}),
                (_, error => {reject(error)})
            )
        })
    });
}

const Update = (obj) =>{
    return new Promise( (resolve, reject) =>{
        db.transaction( tx =>{
            tx.executeSql(`UPDATE Pecas 
                        SET product = ?, type = ?, prov = ?, qtd = ?, date = ? 
                        WHERE rowid = ${obj.rowid}`, 
            [obj.product, obj.type, obj.prov, obj.qtd, obj.date],
                (_, rowsAffected => {resolve(rowsAffected)}),
                (_, error => {reject(error)})
            )
        })
    });
}

const Delete = (id) =>{
    return new Promise ((resolve, reject) =>{
        db.transaction( tx =>{
            tx.executeSql("DELETE FROM Pecas WHERE rowid = ?", [id],
            (_, resultSet => {resolve(resultSet)}),
            (_, error =>{reject(error)})
            )
        })
    });
}

const SelectAll = new Promise( (resolve, reject) =>{
    db.transaction(tx =>{
        tx.executeSql("SELECT rowid, * FROM Pecas;", [],
            (_, response) => resolve(response.rows._array),
            (_, error) => reject(error)
        )
    })
});

const GetByMonth = (month) =>{ 
    return new Promise( (resolve, reject) => {
        db.transaction(tx =>{
            tx.executeSql(`SELECT * from Pecas WHERE date LIKE "%${month}%"`, [],
            (_, resultSet) => resolve(),
            (_, error) => reject())
        })
    });
}

const CountMonthJobs = 
    new Promise ((resolve, reject) =>{
        let date = new Date();
        let month = `${date.getMonth() + 1}/${date.getFullYear()}`;
        db.transaction(tx =>{
            tx.executeSql(`SELECT count(*) as count from Pecas WHERE date LIKE "%${month}%"`, [],
                (_, resultSet) => {resolve(resultSet.rows._array[0].count);},
                (_, error) => {reject(error)}
            )
        })
});

const GetLastJob = 
    new Promise((resolve, reject) =>{
        db.transaction(tx =>{
            tx.executeSql("SELECT * FROM pecas ORDER BY rowid DESC LIMIT 1", [],
                (_, resultSet) => {resolve(resultSet.rows._array[0])},
                (_, error) => {reject(error)}
            )
        })
});

export { Insert, SelectAll, CountMonthJobs, GetLastJob };