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