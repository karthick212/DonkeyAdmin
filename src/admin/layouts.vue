<template>
    <div id="Admin">
            <header></header>
    <sidebar></sidebar>   
    <App></App>
    </div>
</template>
<script>
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import App from "app";
export default {
  name: "AdminLayouts",
  components: {
    Sidebar,
    App,
    Header
  }
};
</script>
<style>
</style>

