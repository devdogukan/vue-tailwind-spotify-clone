<template>
    <div class="wrapper">
      <Sidebar />
      <Content />
    </div>
    <BottomBar />
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Content from './components/Content.vue';
import BottomBar from './components/BottomBar.vue';

export default {
  name: 'App',

  components: {
    Sidebar,
    Content,
    BottomBar,
  },
}

</script>