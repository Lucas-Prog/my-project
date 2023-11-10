import React, {useEffect, useState} from "react";
import { NativeBaseProvider, HStack, Select, CheckIcon, Button, Spacer, Box } from 'native-base';
import { Text, View } from "../../components/Themed";

export default function Report(){
    const [selectedMonth, setSelectedMonth] = useState("");

    return(
        // <NativeBaseProvider>
            <View style={{flex: 1}}>
                <HStack flex={1} alignSelf="center" alignItems="center">
                    <Box>
                        <Text>Selecione Um Mês Para Gerar um Relatório !</Text>
                        <Select selectedValue={selectedMonth} minWidth="250" accessibilityLabel="Mês" placeholder="Mês" 
                        _selectedItem={{bg: "cyan.600", endIcon: <CheckIcon size="5" />
                        }} mt={1} onValueChange={itemValue => setSelectedMonth(itemValue)} variant='filled'>
                            <Select.Item label="Janeiro" value="1" />
                            <Select.Item label="Fevereiro" value="2" />
                            <Select.Item label="Março" value="3" />
                            <Select.Item label="Abril" value="4" />
                            <Select.Item label="Maio" value="5" />
                            <Select.Item label="Junho" value="6" />
                            <Select.Item label="Julho" value="7" />
                            <Select.Item label="Agosto" value="8" />
                            <Select.Item label="Setembro" value="9" />
                            <Select.Item label="Outubro" value="10" />
                            <Select.Item label="Novembro" value="11" />
                            <Select.Item label="Dezembro" value="12" />
                        </Select>
                        <Button>Gerar</Button>
                    </Box>
                </HStack>
            </View>
        // </NativeBaseProvider>
    );
}