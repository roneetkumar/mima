new Vue({
    el: '#wrapper',
    data: {
        name: 'Roneet',
        job: 'ninja',
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        greet: function(time) {

            return 'Good ' + time + ' ' + this.name;
        },

        add: function(inc) {
            this.age += inc;
        },

        sub: function(dec) {
            this.age -= dec;
        },

        update: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

        click: function() {
            alert('You Clicked Me')
        },

        logname: function() {

        },

        logage: function() {

        }
    }
});