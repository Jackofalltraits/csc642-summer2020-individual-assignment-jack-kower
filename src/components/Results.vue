<template>
    <div>
        <br>
        <h2>
        <b>
        Results Verification Page Jack Kower
        </b>
        </h2>
        <input v-model="names"> 
        <h3>Name: {{names}}</h3>
        <h4>Address: {{address}} </h4>
        <h4>Zip: {{zip}}</h4>
        <h4>birthdate: </h4>
        <h4>education: </h4>
        <h4>height: </h4>
        <h4>phone#: </h4>
        <h4>email: </h4>
    </div>
</template>

<script>
import Forms from './Forms'
export default {
    components: 'Results',
    props: ['names', 'addresses', 'zips'],
    data(){
        return{
            names: ''
        }
    }
}
</script>