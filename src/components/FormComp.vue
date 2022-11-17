<script src="../assets/js/app.js"></script>

<template>
    <div class="formComp">

        
        <div class="blue_cont box_sadow">
            <span class="bolder">Try it free 7 days</span> then $20/mo. thereafter
        </div>

        <form action="#" class="form box_sadow">
            <div class="input_cont" :class="{'red': inputfName}">
                <input placeholder="Name"  id="firstname" type="text" v-model="fName" required>
                <img v-show="inputfName" src="../assets/images/icon-error.svg" alt="Error!!!">
            </div>
            <p v-show="inputfName">First Name cannot be empty</p>   
            

            <div class="input_cont" :class="{'red': inputlName}">
                <input  id="lastname" placeholder="Last Name" type="text" v-model="lName" required> 
                <img v-show="inputlName" src="../assets/images/icon-error.svg" alt="Error!!!">
            </div>
            <p v-show="inputlName">Last Name cannot be empty</p>
            
            
            <div class="input_cont" :class="{'red': inputEmail}">
                <input placeholder="Email" id="email" type="text" v-model="email" required> 
                <img v-show="inputEmail"  src="../assets/images/icon-error.svg" alt="Error!!!">
            </div>
            <p v-show="inputEmail">Looks like this is not an email</p>


            <div class="input_cont" :class="{'red': inputPass}">
                <input placeholder="Password" id="pass" type="password" v-model="pass" required> 
                <img v-show="inputPass" src="../assets/images/icon-error.svg" alt="Error!!!">
            </div>
            <p v-show="inputPass">Password cannot be empty</p>



            <button class="button" @click.prevent="isValidForm" >
                Claim your free trial 
            </button>

            <p class="explaining_text">
                By clicking the button, you are agreeing to our <span> Terms and Services </span>
            </p>
            
        </form>

    </div>
</template>

<!-- <style lang="scss" src="../assets/sass/fromComp.scss"></style> -->