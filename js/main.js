
const App = {
    data() {
        return {
            message: 'Hello Vue!',
            inputValue: '',
            inputClasses: '',
            removeBtnClasses: '',
            placeholderName: 'Enter the note title',
            notes: []
        }
    },
    'methods': {
        inputValueHandler(event) {
            this.inputValue = event.target.value
        },
        addNote(event) {
            if(this.inputValue === '') {
                this.placeholderName = 'Can not add empty field!';
                this.inputClasses = 'red_input';
                return;
            } else {
                this.inputClasses = '';
                this.placeholderName = 'Enter the note title';
                this.notes.push(this.inputValue);
                this.inputValue = '';
                if(this.notes.length > 0) {
                    this.removeBtnClasses = '';
                }
                console.log(event);
            }
        },
        keyPressHandler(event) {
            if(event.key === 'Enter') {
                this.addNote();
            }
        },
        removeNote(index) {
            this.notes.splice(index, 1);
        },
        removeAll(index) {
            if(this.notes.length > 0) {
                this.notes.splice(index, this.notes.length);
            }
        }
    },
    // For better perfomance while computing
    computed: {

    },
    // To view variable changes
    watch: {

    }
}
Vue.createApp(App).mount('#app');    // set values into html file