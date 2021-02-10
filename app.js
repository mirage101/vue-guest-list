var vm1 = new Vue({
    el:'#app',
    data:{
        event:{
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            eventTitle2: 'v text output',
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!",
            signUpText: 'Add your name to the guest list for <em>exclusive</em> offers:',
          
        },
        newNameText: '',
        guestName: [],  
        appStyles: {
            marginTop: '25px',            
        },
        eventCapacity: 5,
        eventCapacityPercentage: 0,
        appName: 'Guest List',
        navLinks: [
            {
                name:"Home",
                id: 1,
                url:'http://dir.bg'
            },
            {
                name:"Upcoming events",
                id: 2
            },
            {
                name:"Guest Benefits",
                id: 3
            },
            {
                name:"Latest News",
                id: 4
            },
        ],
    },
    methods:{//always rerender when something change
        formSubmitted: function(){
            
            if(this.newNameText.length > 0  && this.eventCapacityPercentage <= 100){
                this.guestName.push(this.newNameText);
                this.newNameText = '';
                this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity / 100)               
            }           
        },
        methodCall: function(){
            this.appStyles.marginTop = "50px"
        }, 
        keyPressed: function(){
            console.log('key pressed');
        },
        changeTitle: function(){
            this.$refs.name.innerText = "Title changed"
        }
        
    },
    computed:{//react if data changes
        sortNames: function(){
            console.log('computed');
            return this.guestName.sort()
        },
        test: function(){
            console.log('method text');
        }
    },
    watch:{ //we can perform asyncronic tasks //data to observe
        guestName: function(data){
            console.log('watch triggered')
        }
    },
    filters: {
      
        formatName: function(value){
            return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();
        }
    },
    beforeCreate: function(){
        console.log('beforeCreate')
    },
    created: function(){
        console.log('created')
    },
    beforeMount: function(){
        console.log('beforeMount')
    },
    mounted: function(){
        console.log('mounted')
    },
    beforeUpdate: function(){
        console.log('beforeUpdate')
    },
    updated: function(){
        console.log('updated')
    },
    beforeDestroy: function(){
        console.log('beforeDestroy')
    },
    destroyed: function(){
        console.log('destroyed')
    },


});



console.log(vm1)

var vm3 = new Vue({
    template: '<div class="col-sm-12 text-center"><h1>Guest List</h1></div>'
})

vm3.$mount('#navigation');