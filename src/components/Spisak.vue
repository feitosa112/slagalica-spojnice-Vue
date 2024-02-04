<template>
    <div class="row">
        <h1 class="text-center">{{ name }}</h1>
        <div class="col-3 offset-2">
            <div class="row" v-for="(colona1,index) in spojnica1" :key="index">
                <button :class="['btn btn-info',{ 'btn btn-warning': index === currentSpojnica1Index }]" @click="checkAnswer(colona1)">{{ colona1.spojnica1 }}</button>
            </div>
        </div>

        <div class="col-2 text-center">
            <a class="btn btn-success" style="text-decoration: none;">Bodovi: {{ brojac }}</a><br>
            <NewGame/>
        </div>

        <div class="col-3 offset-">
            <div class="row" v-for="(colona2,index) in spojnica2" key="index">
                <button class="btn btn-success" v-if="colona2.odg" @click="checkAnswer(colona2)">{{ colona2.spojnica1 }}</button>
                <button class="btn btn-info" v-else @click="checkAnswer(colona2)">{{ colona2.spojnica1 }}</button>

            </div>
        </div>

        
    </div>
 
    

</template>


<script>
import {spojnice} from '../spojnice.js';
import NewGame from './NewGame.vue';
    export default {
       components:{NewGame},
        data (){
            const randomCategoryIndex = Math.floor(Math.random() * spojnice.length);
            const izbor = spojnice[randomCategoryIndex];
            // console.log(izbor.zadatak.col1)
            return {
                name: izbor.zadatak.name,
                spojnica1 : izbor.zadatak.col1,
                spojnica2 : izbor.zadatak.col2,
                currentSpojnica1Index: 0,
                currentSpojnica2Index: 0,
                correctAnswer: false,
                brojac:0
        }
    },
        methods:{
            checkAnswer(selectedItem){
                const currentSpojnica1 = this.spojnica1[this.currentSpojnica1Index];
                const currentSpojnica2 = this.spojnica2[this.currentSpojnica2Index];
                
                
                if(selectedItem.spojnica1 === currentSpojnica1.odgovor){
                    const trazeniSpojnica2 = this.spojnica2.find(spojnica =>spojnica.id === currentSpojnica1.id);
                    trazeniSpojnica2.odg=true;
                    this.brojac+=1;
                    this.correctAnswer = true;
                    this.currentSpojnica1Index+=1;
                    
                    this.currentSpojnica2Index+=1;
                    
                }else{
                    this.brojac-=1;
                    this.currentSpojnica1Index+=1;

                }
                
                  
            }
            
        }
    }

</script>

<style scoped>
button {
    width: 450px;
    margin: 5px;
}
</style>