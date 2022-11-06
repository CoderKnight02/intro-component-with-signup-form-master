<script>
    
    export default{
        data(){
            return {
                fName: '',
                lName: '',
                pass: '',
                email: '',
                inputfName: false,
                inputlName: false,
                inputPass: false,
                inputEmail: false,

            }
        },
        methods:{

            isValidForm(){
                this.checkfName()
                this.checklName()
                this.checkEmail()

                this.checkPass()
            },

            checkfName(){
                if(this.fName.trim().length == 0) this.inputfName = true
                else this.inputfName = false
            },

            checklName(){
                if(this.lName.trim().length == 0) this.inputlName = true
                else this.inputlName = false
            },
            
            checkPass(){
                if(this.pass.trim().length == 0) this.inputPass = true
                else this.inputPass = false 
            },

            checkEmail(){
                if(
                    this.email.trim().length == 0 ||
                    this.email.trim().includes(' ') ||
                    this.email.indexOf('@') == -1 || 
                    this.email.match(/@/g).length != 1 || 
                    this.email.indexOf('.') == -1 || 
                    this.email.match(/\./g).length != 1 ||
                    this.email.indexOf('.') < this.email.indexOf('@') ||
                    this.email.search(/\.([a-z]|[0-9])/) == -1 || 
                    this.email.search(/@([a-z]|[0-9])/) == -1 
                
                ) this.inputEmail = true
                else this.inputEmail = false
            }
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
            <div :class="{'red': inputfName}">
                <input  id="firstname" type="text" v-model="fName" required>
                <img v-show="inputfName" src="../assets/images/icon-error.svg" alt="Error!!!">
            </div>
            <p v-show="inputfName">text to show if case of wrong form</p>   
            

            <label for="lastname">Last Name </label>
            <div :class="{'red': inputlName}">
                <input  id="lastname" type="text" v-model="lName" required> 
                <img v-show="inputPass" src="../assets/images/icon-error.svg" alt="Error!!!">
            </div>
            <p v-show="inputlName">text to show if case of wrong form</p>
            
            
            <label for="email">Email Address</label>
            <div :class="{'red': inputEmail}">
                <input  id="email" type="text" v-model="email" required> 
                <img v-show="inputPass" src="../assets/images/icon-error.svg" alt="Error!!!">
            </div>
            <p v-show="inputEmail">text to show if case of wrong form</p>


            <label for="pass">Password</label>
            <div :class="{'red': inputPass}">
                <input  id="pass" type="password" v-model="pass" required> 
                <img v-show="inputPass" src="../assets/images/icon-error.svg" alt="Error!!!">
            </div>
            <p v-show="inputPass">text to show if case of wrong form</p>



            <button @click.prevent="isValidForm" >
                Claim your free trial 
            </button>

            <p>
                By clicking the button, you are agreeing to our Terms and Services
            </p>
            
        </form>

    </div>
</template>

<style lang="scss" scoped>
    $color: black;

    input{
        border: none;
    }
    .red{
        border-color: red;
    }
    
    label + div{
        padding: 3px 0;
        display: flex;
        gap: 10px;
        align-items: center;
        border: 1px solid black;
        border-radius: 3px;
    }

</style>