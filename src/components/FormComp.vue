<script>
    
    import { mapMutations, mapState } from 'vuex';
    export default{
        
        computed:{
            ...mapState(['fName','email','pass','lName'])
        },
        methods:{
            ...mapMutations(['add'])
        }
    }
</script>
<template>
    <div>

        
        <div class="blue">
        Try it free 7 days then $20/mo. thereafter
        </div>
        <form action="#" class="form">
            <label for="firstname">First Name</label>
            <input id="firstname" type="text" required>

            <label for="lastname">Last Name </label>
            <input id="lastname" type="text" required>

            <label for="email">Email Address</label>
            <input id="email" type="text" required>

            <label for="pass">Password</label>
            <input id="pass" type="password" required>
            
            <button @click="isValidForm" >
                Claim your free trial 
            </button>
            <p>
                By clicking the button, you are agreeing to our Terms and Services
            </p>
            
        </form>
    </div>
</template>

<style lang="scss">
    $color: black;
    
</style>