const App = {
    data() {
        return {
            message: 'Hello Vue!',
            inputValue: '',
            notes: []
        }
    },
    'methods': {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNote() {
            this.notes.push(this.inputValue);
            this.inputValue = '';
        }
    }
}
Vue.createApp(App).mount('#app'); // set values into html file