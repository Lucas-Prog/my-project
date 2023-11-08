import * as React from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

import { Text, View } from '../../components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import Colors from '../../constants/Colors';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}


export default function TabTwoScreen() {
  const colorScheme = useColorScheme();


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.item}>
          <Link href="/addJobs" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <MaterialIcons 
                      name="add-task" 
                      size={100} 
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{ opacity: pressed ? 0.5 : 1 }}                  
                    />
                  )}
                </Pressable>
              </Link>
            <Text>Adicionar um trabalho</Text>
          </View>
          <View style={styles.item}>
          <Link href="/ServiceList" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome 
                    name="list-alt" 
                    size={100} 
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            <Text>Visualizar Trabalhos</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text>Trabalhos Realizados este Mês: </Text>
        <Text>Ultimo Trabalho Realizado:</Text>
      </View>
      {/* <View style={styles.row}>
        <View style={styles.item}>
          <Text>c</Text>
        </View>
        <View style={styles.item}>
          <Text>d</Text>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content:{
    flex: 1,
    marginHorizontal: "auto",
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    flexDirection: "row",
  },
  item:{
    // maxWidth: 100,
    // maxHeight: 100,
    margin: 20,
    alignItems: "center",
    // backgroundColor: "#dededc",
    // padding: 20,
  },
  footer:{
    maxHeight: 50,
    alignItems: "center"
  },
  text:{
    color: '#fff',
  }
});
