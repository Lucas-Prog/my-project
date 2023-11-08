import React, { useState, useEffect, Suspense } from 'react';
import { StyleSheet} from 'react-native';
import { Text, View } from '../../components/Themed';
import { DataTable, PaperProvider, Button } from 'react-native-paper';

import * as Pecas from '../DB/Pecas';


const obj = {
  product: "ppr",
  type: 1,
  qtd: 2,
  date: '25/10/2023'
};
const Insert = ()=> {
  Pecas.INSERT(obj)
  .then(response => console.log(`response: ${response}`))
  .catch(err => console.log(`err: ${JSON.stringify(err.message)}`));
}

export default function TabOneScreen() {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([5, 10]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [tableData, setTableData] = useState ([
    {
      rowid: 1,
      product: " ",
      type: " ",
      prov: " ",
      qtd: " ",
      date: " " 
    }
  ]);
  const from = page * itemsPerPage;
  const to = Math.min((page + 1)  * itemsPerPage, tableData.length);

  useEffect(() => {
    setPage(0);
    Pecas.SelectAll.then(res => setTableData(res), error => console.log(error) );
  }, [itemsPerPage, tableData]);
  
  const Tble = () =>{
    return 
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={[styles.title, styles.centerAlign]}>Lista de Trabalhos</Text>
        <View style={[styles.separator, styles.centerAlign]} lightColor="#eee" darkColor="rgb(255,255,255)" />
        
        {/* <Suspense fallback={'loading...'}> 
          <Tble /> 
        </Suspense> */}

<DataTable>
              <DataTable.Header>
                <DataTable.Title textStyle={[, {fontWeight: "bold", includeFontPadding: false}]}>Nº</DataTable.Title>
                <DataTable.Title>Produto</DataTable.Title>
                <DataTable.Title>Tipo</DataTable.Title>
                <DataTable.Title>Provisória</DataTable.Title>
                <DataTable.Title textStyle={[, { includeFontPadding: false}]}>Qtd.</DataTable.Title>
                <DataTable.Title>Data</DataTable.Title>
              </DataTable.Header>


              {tableData.slice(from, to).map((item) => (
                <DataTable.Row key={item.rowid}>
                  <DataTable.Cell textStyle={[styles.text, {fontWeight: "bold"}]}>{item.rowid}</DataTable.Cell>
                  <DataTable.Cell textStyle={styles.text}>{item.product}</DataTable.Cell>
                  <DataTable.Cell textStyle={styles.text}>{item.type}</DataTable.Cell>
                  <DataTable.Cell textStyle={styles.text}>{item.prov}</DataTable.Cell>
                  <DataTable.Cell textStyle={styles.text}>{item.qtd}</DataTable.Cell>
                  <DataTable.Cell textStyle={styles.text}>{item.date}</DataTable.Cell>
                </DataTable.Row>
              ))}

              <DataTable.Pagination 
                page={page}
                numberOfPages={Math.ceil(tableData.length / itemsPerPage)}
                onPageChange={(page) => setPage(page)}
                label={`${from + 1}-${to} de ${tableData.length}`}
                numberOfItemsPerPageList={numberOfItemsPerPageList}
                numberOfItemsPerPage={itemsPerPage}
                onItemsPerPageChange={onItemsPerPageChange}
                showFastPaginationControls
                selectPageDropdownLabel={'itens por Página'}
              />
                  
            </DataTable>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  centerAlign: {
    alignSelf: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  head:{
    height: 40,
    backgroundColor: '#f1f8f8'
  },
  text:{
    // color: '#fff'
  }
});
