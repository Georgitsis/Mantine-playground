import { useState } from 'react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import {
  AppShell,
  Burger,
  Button,
  CloseButton,
  Flex,
  Group,
  Input,
  Skeleton,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';

//import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
//import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  const [opened, { toggle }] = useDisclosure();
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const [inputValue, setInputValue] = useState('');
  return (
    <AppShell
      header={{ height: 60 }}
      // navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      footer={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          {/* {<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />} */}
          <MantineLogo size={30} />
          <Button onClick={() => toggleColorScheme()}>
            {colorScheme === 'light' ? <FaRegMoon color="white" /> : <FaRegSun color="white" />}
          </Button>
        </Group>
      </AppShell.Header>
      {<AppShell.Main /* style={{ paddingInlineStart: '0' }}*/>Main</AppShell.Main>}
      <AppShell.Footer>
        <Input
          placeholder="Input"
          value={inputValue}
          onChange={(event) => setInputValue(event.currentTarget.value)}
          rightSectionPointerEvents="all"
          mt="md"
          rightSection={
            <CloseButton
              aria-label="Clear input"
              onClick={() => setInputValue('')}
              style={{ display: inputValue ? undefined : 'none' }}
            />
          }
        />
      </AppShell.Footer>
    </AppShell>
  );
}
