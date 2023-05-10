import { AdjustIcon, FavoriteIcon, Group, HomeIcon, TabBarContainer, TabBarLink, Text, UserIcon } from "./TabBar";

const TabBarComponent = () => {
  return (
    <TabBarContainer>

      <TabBarLink to="adjust">
        <Group>
          <AdjustIcon />
          <Text>Adjust</Text>
        </Group>
      </TabBarLink>

      <TabBarLink to="home">
        <Group>
          <HomeIcon />
          <Text>Home</Text>
        </Group>
      </TabBarLink>

      <TabBarLink to="favorites">
        <Group>
          <FavoriteIcon />
          <Text>Favorites</Text>
        </Group>
      </TabBarLink>

      <TabBarLink to="profile">
        <Group>
          <UserIcon />
          <Text>Profile</Text>
        </Group>
      </TabBarLink>

    </TabBarContainer>
  )
}

export default TabBarComponent;