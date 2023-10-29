<template>
  <Menu as="nav" class="relative" v-slot="{ open }">
    <MenuButton
      class="flex items-center h-8 rounded-3xl pr-2 hover:bg-active"
      :class="{ 'bg-active': open, ' bg-black': !open }"
    >
      <img
        :src="user.avatar"
        alt="avatar"
        class="w-7 h-7 rounded-full p-px ml-0.5 mr-2"
      />
      <span class="text-sm font-semibold mr-2">{{ user.name }}</span>
      <span :class="{ 'rotate-180': open }">
        <Icons size="16" name="downDir" />
      </span>
    </MenuButton>
    <MenuItems
      class="absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"
    >
      <MenuItem
        v-for="(menuItem, index) in menuItems"
        :key="index"
        v-slot="{ active }"
      >
        <a
          class="h-10 flex justify-between items-center px-2 text-sm rounded"
          :class="{ 'bg-white bg-opacity-10': active }"
          href="#"
        >
          <span class="text-sm font-semibold">{{ menuItem.name }}</span>
          <Icons v-if="menuItem.icon != ''" size="16" :name="menuItem.icon" />
        </a>
      </MenuItem>
      <MenuItem v-slot="{ active }">
        <a
          class="h-10 flex items-center px-2 text-sm border-t border-link border-opacity-50"
          :class="{
            'bg-white bg-opacity-10 border-link border-opacity-5': active,
          }"
          href="#"
        >
          <span class="text-sm font-semibold">Log out</span>
        </a>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import Icons from "../../Icons.vue";

export default {
  name: "Auth",

  components: {
    Menu,
    MenuItems,
    MenuButton,
    MenuItem,
    Icons,
  },

  data() {
    return {
      user: {
        name: "Dogukan Aksoy",
        avatar:
          "https://i.scdn.co/image/ab6775700000ee856dba489b9f63d50829044d17",
      },

      menuItems: [
        { icon: "external", to: "#", name: "Account" },
        { icon: "", to: "#", name: "Profile" },
        { icon: "", to: "#", name: "Settings" },
      ],
    };
  },
};
</script>
