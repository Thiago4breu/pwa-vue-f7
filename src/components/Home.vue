<template>
  <f7-page>
    <f7-navbar title="First Vue.js + F7.io"></f7-navbar>

    <f7-block-title>F7 Styled Cards</f7-block-title>
    <f7-card class="demo-card-header-pic">
      <f7-card-header class="no-border" valign="bottom"
        style="background-image:url(https://loremflickr.com/1000/600/mountains)">Journey To Mountains
      </f7-card-header>
      <f7-card-content>
        <p class="date">Posted on January 21, 2015</p>
        <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
      </f7-card-content>
      <f7-card-footer>
        <f7-link>Like</f7-link>
        <f7-link>Read more</f7-link>
      </f7-card-footer>
    </f7-card>

    <f7-fab position="right-bottom" slot="fixed" color="blue">
      <f7-icon ios="f7:add" md="material:add"></f7-icon>
      <f7-icon ios="f7:close" md="material:close"></f7-icon>
      <f7-fab-buttons position="top">
        <f7-fab-button label="Action 1">1</f7-fab-button>
        <f7-fab-button label="Action 2">2</f7-fab-button>
      </f7-fab-buttons>
    </f7-fab>
  
  <f7-block>
  <f7-row>
    <f7-col>
      <f7-button external fill href="https://github.com/Thiago4breu/pwa-vue-f7" color="black">GitHub</f7-button>
    </f7-col>
    <f7-col>
      <f7-button external fill href="https://vuejs.org/" color="green">Vue.js</f7-button>
    </f7-col>
    <f7-col>
      <f7-button external fill href="https://framework7.io/vue/" color="red">F7.io</f7-button>
    </f7-col>
  </f7-row>
  </f7-block>

  </f7-page>
</template>

<script>
// Import F7 components you need
import {
  f7Page,
  f7Navbar,
  f7Card,
  f7BlockTitle,
  f7CardContent,
  f7List,
  f7CardHeader,
  f7CardFooter,
  f7Link,
  f7ListItem,
  f7Button,
  f7Fab,
  f7Icon,
  f7FabButtons,
  f7FabButton,
  f7Block,
  f7Row,
  f7Col
} from "framework7-vue";

export default {
  // register F7 Vue components in required Vue component
  components: {
    f7Page,
    f7Navbar,
    f7Navbar,
    f7Card,
    f7BlockTitle,
    f7CardContent,
    f7List,
    f7CardHeader,
    f7CardFooter,
    f7Link,
    f7ListItem,
    f7Button,
    f7Fab,
    f7Icon,
    f7FabButtons,
    f7FabButton,
    f7Block,
    f7Row,
    f7Col
  }
};
</script>

<style>
  .col {
    text-align: center;
  }
</style>
