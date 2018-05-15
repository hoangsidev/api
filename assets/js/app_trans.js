Vue.directive('focus', {
    inserted: function (el) {
        el.focus()
    }
});

var app_trans = new Vue({
    el: '#app_trans',
    data: {
        trans_in: '',
        trans_out: '',
        trans_mean : '',
        show_mean : false,
        type_trans_out: 'vi',
        count_online : 1
    },
    methods: {
        translate() {
            socket.emit('guest_trans_in', this.trans_in, this.type_trans_out);
            socket.on('ser_trans_out', (trans_out, trans_mean) => {
                this.trans_out = trans_out;
                if(trans_mean!='') {
                    this.trans_mean = trans_mean;
                    this.show_mean = true;
                }
            });
        },
        empty_trans_in() {
            this.trans_in = '';
            this.$refs.trans_in.focus();
        },
        push_trans_mean() {
            this.trans_in = this.trans_mean;
            this.show_mean = false;
        }
    },
    mounted() {
        this.translate();
    },
    updated() {
        this.translate();
    }
});

socket.on('count_online', (count_online) => {
    app_trans.count_online = count_online
});
