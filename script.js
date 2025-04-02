// Include Vue.js via CDN
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js";
script.type = "text/javascript";
document.head.appendChild(script);

script.onload = () => {
    const app = Vue.createApp({
        data() {
            return {
                p: 0,
                r: 41,
                s: 200,
                c: 5.5,
                e: 3000,
                cost: 0
            };
        },
        methods: {
            greet() {
                alert(this.message);
            },
            calc() {
                const p = parseFloat(this.p);
                const r = parseFloat(this.r);
                const s = parseFloat(this.s);
                const c = parseFloat(this.c);
                const e = parseFloat(this.e);
                const shipment = s / r;
                const extra = e /r;
                const midp = p + Math.round(shipment * 100) / 100 + Math.round(extra * 100) / 100;
                const cost = midp / (1 - c / 100); 
                this.cost = Math.round(cost * 100) / 100;
            }

        }
    });

    app.mount('#app');
};

