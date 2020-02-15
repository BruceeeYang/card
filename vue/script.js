const vm = new Vue ({
    el:'#app',
    data:{
        name:'Bruce Yang',
        title:'-ThinkPower Engineer',
        date:'2019 / 2 / 15',
        cardInfoStyle:'card-text-info',
        todos: [
            { text: 'ThinkPower' },
            { text: 'Engineer' },
            { text: '前端工程師' }
          ],
        imgSrc:'images/personal.png',
        bgColor:'cardBlue',
        greeting:'',
        subTitle:'',
        inputColor1:'',
        showAngular:true,
        showReact:true,
        
    },

    methods:{
        cnClick(){
            this.subTitle = this.greeting
            this.greeting = ''
        }
    }
})

