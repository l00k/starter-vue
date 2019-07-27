<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
    <div>
        <h3>Script (inline)(ts)</h3>
        <div class="greeting">Hello {{name}}</div>
        <button @click="test">log something in console</button>
    </div>
</template>

<script lang="ts" type="text/tsx">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class HelloDecorator extends Vue {
    @Prop() name!: string;

    test() {
        console.log('component 3')
    }
}

</script>
