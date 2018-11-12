<!-- Default App Template, You can customize to define any default behavior you want, but do not remove f7App and f7View  -->
<template>
  <f7-app :params="f7Params">
    <!-- Put anything here -->
    <f7-view url="/" :main="true" class="ios-edges"></f7-view>
    <!-- Put anything here -->
  </f7-app>
</template>

<script>
  import { f7App, f7View /* f7Statusbar, f7Panel, ... */ } from 'framework7-vue';
  import routes from './routes';

  export default {
    components: {
      f7App,
      f7View,
      /*f7Statusbar, f7Panel,...*/
    },
    data() {
      // Demo Theme
      let theme = 'auto';
      if (document.location.search.indexOf('theme=') >= 0) {
        theme = document.location.search.split('theme=')[1].split('&')[0];
      }

      return {
        f7Params: {
          theme,
          routes,
          id: 'io.framework7.testapp',
        },
      };
    },
  };
</script>