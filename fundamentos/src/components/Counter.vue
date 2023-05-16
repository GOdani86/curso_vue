<template>
  <h2>{{ getTitle }}</h2>
  <p> {{ start }}<sup>2</sup> = {{ squareCounter }}</p>
  <p data-testid="counter"> {{ start }}</p>
  <div>
    <button v-on:click ="increase">+1</button>
    <button v-on:click ="decrease">-1</button>
  </div>
</template>

<script>
//import { number,string } from 'yargs';


export default {
    props:{
        title:String,
        start: {
            type:Number,
            default:100,
            validator(value) {
                return value >= 0
            }
        }

    }
    ,
    data() {
        return {
            counter: 5
        }
    },
    methods: {
        getSquareValue() {
            console.log('getSquareValue');
            return this.counter * this.counter
        },
        increase(){
            this.counter ++ 
        },
        decrease(){
            this.counter --
        }
    },
    computed: {
        squareCounter() {
            console.log('squareCounter');
            return this.counter * this.counter
        },
        getTitle() {
            return this.title || 'Counter'
        }
    }
}
</script>

<style>
    button{
        background-color: #64BB87;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        cursor: pointer;
        margin: 0 5 px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }
    button:hover{
        background-color: #5aa67b;
        transition: 0.3s ease-in-out;

    }
</style>
