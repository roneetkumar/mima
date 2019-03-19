new Vue({
    el: '#wrapper',
    data: {
        sliderValue: [{
            val: 20,
            name: 'Length',
        }, {
            val: 50,
            name: 'Symbol',
        }, {
            val: 70,
            name: 'Digit',
        }, {
            val: 40,
            name: 'Words',
        }],
    },
    computed: {
        total() {
            return ((parseInt(this.sliderValue[0].val) + parseInt(this.sliderValue[1].val) + parseInt(this.sliderValue[2].val) + parseInt(this.sliderValue[3].val)) / 4);
        }
    },
    methods: {
        copy() {
            this.$refs.text.select();
            document.execCommand('copy');
        }
    }
})