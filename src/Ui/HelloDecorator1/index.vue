<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
    <div>
        <h3>Script (file)(ts)</h3>
        <div class="greeting">Hello {{name}}</div>
        <button @click="test">log something in console</button>
        
        <h3 id="style-1">Style 1 (inline)(scss)</h3>
        <h3 id="style-2">Style 2 (inline)(css)</h3>
        <h3 id="style-3">Style 3 (file)(scss)</h3>
        <h3 id="style-4">Style 4 (file)(css)</h3>
    </div>
</template>

<script lang="ts" type="text/tsx" src="./script.tsx"></script>

<style lang="scss">
#style-1 {
    color: darkblue;
    transform: rotate3d(0,5,1,0);
    filter: grayscale(0.5);
}
</style>
<style lang="css">
#style-2 {
    color: red;
}
</style>
<style scoped lang="scss" src="./style3.scss"></style>
<style scoped lang="css" src="./style4.css"></style>
