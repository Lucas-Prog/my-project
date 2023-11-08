import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, Stack } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
    screenOptions={{
      // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Stack.Screen
        name="addJobs"
        options={{
          title: "Adicionar Trabalho",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="ServiceList"
        options={{
          title: 'Lista de Serviços',
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          // href: null,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="calendar-o"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
