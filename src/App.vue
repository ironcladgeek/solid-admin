<template>
  <div id="app">
    <!-- Lock screen. only vissible when the dashboard is locked-->
    <sa-lock-screen v-if="isDashboardLocked"></sa-lock-screen>

    <!-- Content to show when the dashboard is not locked-->
    <div v-else>
      <!-- Fixed top navbar -->
      <sa-navbar></sa-navbar>
      <sa-search></sa-search>
  
      <!-- wrapper for sidebar and main content -->
      <div class="sa-main-wrapper">
        <sa-sidebar></sa-sidebar>
  
        <sa-content>
          <router-view></router-view>
        </sa-content>
      </div>
    </div>

    <!-- Overlays here-->
    <section>
      <sa-loading v-if="showLoading"></sa-loading>
      <sa-notification-container></sa-notification-container>
    </section>
  </div>
</template>

<script>
import SaNavbar from './components/layout/navbar/SaNavbar.vue';
import SaSidebar from './components/layout/sidebar/SaSidebar.vue';
import SaMainContent from './components/layout/content/SaMainContent.vue';
import SaSearch from './components/layout/search/SaSearch.vue';
import SaLockScreen from './components/layout/overlay/SaLockScreen.vue';
import SaLoading from './components/layout/overlay/SaLoading1.vue';
import SaNotificationContainer from './components/features/notification/SaNotificationContainer.vue';

export default {
  components: {
    'sa-navbar':      SaNavbar,
    'sa-sidebar':     SaSidebar,
    'sa-content':     SaMainContent,
    'sa-search':      SaSearch,
    'sa-lock-screen': SaLockScreen,
    'sa-loading':     SaLoading,
    'sa-notification-container': SaNotificationContainer
  },

  data() {
    return {
      showLoading: false
    }
  },

  computed: {
    isDashboardLocked() {
      return this.$store.state.isDashboardLocked;
    }
  }
}
</script>
