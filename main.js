const vm = new Vue({
    el: '#hello',
    data: {
        greeting: 'hello world!'
    }
})

const vm1 = new Vue({
    el: '#data',
    data: {
        firstName: 'ada',
        lastName: 'lovelace',
        profession: 'mathematician'
    }
})

const vm2 = new Vue({
    el: '#method',
    data: {
        firstName: 'ada',
        lastName: 'lovelace',
    },
    methods: {
        greet: function(){
            return `Hello, ${this.firstName}`
        },
        add: function(a, b){
            return a + b
        }
    }
})

const vm3 = new Vue({
    el: '#binding',
    data: {
        link: 'https://hongmei-codes.github.io',
    }
})

const vm4 = new Vue({
    el: '#html',
    data: {
        linkTag: '<a href="https://hongmei-codes.github.io"><strong>Link</strong></a>',
    }
})

const vm5 = new Vue({
    el: '#events',
    data: {
        age: 25,
        x: 0,
        y:0
    },
    methods: {
        addOneYear: function(){
            this.age++;
        },
        subOneYear: function(){
            this.age--;
        },
        updateCoordinates: function(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
})

const vm6 = new Vue({
    el: '#two-way-binding',
    data: {
        name: ''
    }
})