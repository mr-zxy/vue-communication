<template>
  <div id="App">
    <nav>
      <el-row type="flex" justify="center" style="margin:20px">
        <router-link to="/props-emit-v-model" class="ml-5 mr-5"><el-button>props/$emit/v-model</el-button></router-link>
        <router-link to="/childre-parent" class="ml-5 mr-5"><el-button>$children/$parent</el-button></router-link>
        <router-link to="/eventBus" class="ml-5 mr-5"><el-button>eventBus</el-button></router-link>
        <router-link to="/provide-inject" class="ml-5 mr-5"><el-button>provide/inject</el-button></router-link>
        <router-link to="/attrs-listeners" class="ml-5 mr-5"><el-button>$attrs/$listeners</el-button></router-link>
        <router-link to="/ref" class="ml-5 mr-5"><el-button>$ref</el-button></router-link>
      </el-row>
    </nav>
    <router-view></router-view>
  </div>
</template>
<style>
.ml-5{
    margin-left: 5px;
}
.mr-5{
    margin-right: 5px;
}
</style>