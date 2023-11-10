import React, { useState, useCallback} from 'react';
import { Platform, StyleSheet, SafeAreaView} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useForm, Controller} from 'react-hook-form'
import { Select, Alert, CheckIcon, NativeBaseProvider, Switch, HStack, Button, Divider, Collapse} from 'native-base';

import { Text, View } from '../../components/Themed';
import * as Pecas from '../DB/Pecas';
import TabOneScreen from './ServiceList';

export default function ModalScreen() {
  const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        firstName: "",
        lastName: "",
      },
  });
  const onSubmit = (data: any) => console.log(data);
  const [service, setService] = useState("");
  const [quantidede, setQuantidade] = useState("");
  const [provisoria, setProvisoria] = useState(false);
  const [supInf, setSupInf] = useState(false); 
  const [teste, setTeste] = useState({});

  const [showSpam, setShowSpam] = useState(false);
  const [spamStatus, setSpamStatus] = useState(false);

  const formatDate = () =>{
    let date = new Date();
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
  }

  const pushDB = () =>{
      let obj = {
        product: service,
        type: supInf,
        prov: provisoria,
        qtd: quantidede,
        date: formatDate()
      }
    Pecas.Insert(obj).then(res => {
      console.log(`res: ${res}`);
      setShowSpam(true);
      setSpamStatus(true);
      // alert("Sucesso");
    }).catch(errors => {
      console.log(`err: ${errors}`);
      setShowSpam(true);
      setSpamStatus(false);
      // alert("Erro");

    });
  }

    const statusAlert = [{
      status: "success",
      title: "Trabalho adicionado com sucesso !"
    },{
      status: "error",
      title: "Erro ao adicionar o trabalho !"
    }];

  return (
    // <NativeBaseProvider>
      <View style={styles.container}>
        <Text>Tipo de Protese:</Text>
        <Select selectedValue={service} minWidth="250" accessibilityLabel="Tipo de Protese" placeholder="Tipo de Protese" 
        _selectedItem={{bg: "cyan.600", endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setService(itemValue)} variant='filled'>
            <Select.Item label="Protese Total" value="PT" />
            <Select.Item label="PPR" value="PPR" />
            <Select.Item label="Ponte Movel" value="PM" />
            <Select.Item label="Protocolo" value="Protocolo" />
            <Select.Item label="Adesiva" value="Adesiva" />
        </ Select>

        <HStack alignItems="center" space={4}>
          <Text>Definitiva</Text>
          <Switch size="md" isChecked={provisoria} onToggle={setProvisoria} onTrackColor={'trueGray.300'}/>
          <Text>Provisória</Text>
        </HStack> 

        <HStack alignItems="center" space={4}>
          <Text>Superior</Text>
          <Switch size="md" isChecked={supInf} onToggle={setSupInf} onTrackColor={'trueGray.300'}/>
          <Text>Inferior</Text>
        </HStack> 

        <Text>Quantidade: </Text>
        <Select selectedValue={quantidede} minWidth="250" accessibilityLabel="Quantidade" placeholder="Quantidade" 
        _selectedItem={{bg: "cyan.600", endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setQuantidade(itemValue)} variant='filled'>
            <Select.Item label="1" value="1" />
            <Select.Item label="2" value="2" />
            <Select.Item label="3" value="3" />
            <Select.Item label="4" value="4" />
            <Select.Item label="5" value="5" />
            <Select.Item label="6" value="6" />
            <Select.Item label="7" value="7" />
            <Select.Item label="8" value="8" />
            <Select.Item label="9" value="9" />
            <Select.Item label="10" value="10" />
        </ Select>

        <Divider thickness={2} mx={10} h={5} w={0}/>

        <HStack space={5}>
          <Button colorScheme="primary" onPress={pushDB}>Confirmar</Button>
          <Button colorScheme="secondary" onPress={() => { setProvisoria(false); setQuantidade(""); setService(""); setSupInf(false); setShowSpam(false);}}>Cancelar</Button>
        </HStack>


        
        <Collapse isOpen={showSpam} safeAreaBottom>
          <HStack alignItems="center" safeAreaBottom w="95%" alignSelf="center">
              <Alert w="100%" status={spamStatus == true ? statusAlert[0].status : statusAlert[1].status}> 
                <Alert.Icon mt="1"/>
                <Text>{spamStatus == true ? statusAlert[0].title : statusAlert[1].title}</Text>
              </Alert>
          </HStack>
        </Collapse>

          {/* <Controller
              control={control}
              rules={{
              required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                  placeholder="First name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
              />
              )}
              name="firstName"
          />
          {errors.firstName && <Text>This is required.</Text>}

        <Button title="teste" onPress={() => setOpen(true)} /> */}


      </View>

    //</NativeBaseProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // opacity: 0.2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  Text: {
    color: "#fff"
  },
  centerAlign: {
    alignSelf: 'center'
  },
});
