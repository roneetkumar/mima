new Vue({
    el: '#wrapper',
    data: {
        sliderValue: [{
            val: 20,
            name: 'Length'
        }, {
            val: 50,
            name: 'Symbol'
        }, {
            val: 70,
            name: 'Digit'
        }, {
            val: 40,
            name: 'Words'
        }]
    },
    computed: {
        total() {
            return (this.sliderValue[3].val + this.sliderValue[1].val + this.sliderValue[2].val + this.sliderValue[3].val) / 4;
        }
    }
})