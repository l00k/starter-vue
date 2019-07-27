import Vue from "vue"
import HelloDecoratorComponent1 from "./Ui/HelloDecorator1/index.vue"
import HelloDecoratorComponent2 from "./Ui/HelloDecorator2/index.vue"
import HelloDecoratorComponent3 from "./Ui/HelloDecorator3/index.vue"
import HelloDecoratorComponent4 from "./Ui/HelloDecorator4/index.vue"

let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <h1>Component 1</h1>
        <hello-decorator-component1 :name="name" :initialEnthusiasm="5" />
        <h1>Component 2</h1>
        <hello-decorator-component2 :name="name" :initialEnthusiasm="5" />
        <h1>Component 3</h1>
        <hello-decorator-component3 :name="name" :initialEnthusiasm="5" />
        <h1>Component 4</h1>
        <hello-decorator-component4 :name="name" :initialEnthusiasm="5" />
        </div>
    `,
    data: { name: "World" },
    components: {
        HelloDecoratorComponent1,
        HelloDecoratorComponent2,
        HelloDecoratorComponent3,
        HelloDecoratorComponent4,
    }
});
