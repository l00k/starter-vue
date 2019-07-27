<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
    <div>
        <h3>Script (inline)(js)</h3>
        <div class="greeting">Hello {{name}}</div>
        <button @click="test">log something in console</button>
    </div>
</template>

<script lang="js" type="text/javascript">
export default {
    props: {
        name: String
    },
    methods: {
        test() {
            console.log('component 4')
        }
    },
}
</script>
