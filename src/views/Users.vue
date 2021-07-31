<template>
  <div>
    <h3>Users</h3>
    <hr>
    <!-- $routeはビュールーターが提供しているものparams.idで特定のパラメーターを受け取る -->
    <h1>User No. {{ $route.params.id }}</h1>
  </div>
</template>