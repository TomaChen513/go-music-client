<template>
  <h2>{{ count }}</h2>
  <button @click="update">更新</button>
  <hr />
  <h2>name: {{ state.name }}</h2>
  <h2>age: {{ state.age }}</h2>
  <h2>wife: {{ state.wife }}</h2>
  <button @click="update2">更新</button>
  <hr />
</template>

<script>
import {ref} from 'vue'
import {reactive} from 'vue'
export default {

  setup(){
    const count=ref(1)
    const state=reactive({
        name: 'tom',
        age: 25,
        wife: {
          name: 'marry',
          age: 22}
    }
    )
    console.log(count)

    console.log(state, state.wife)

    // const update1 = ()=>{
    //   count.value+=1;
    // }
    //
    const update2=()=>{
      state.name+="--"
      state.age+=1
    }

    function update(){
      count.value+=1
    }

    return{
      count,
      update,
      // update1,
      state,
      update2
    }
  }

}
</script>

<style scoped>

</style>