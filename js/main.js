
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
            if(this.notes.length < 1) {
                this.removeBtnClasses = 'disabled';
            } else {
                this.removeBtnClasses = '';
            }
        },
        addNote() {
            if(this.inputValue === '') {
                this.placeholderName = 'Can not add empty field!';
                this.inputClasses = 'red_input';
                return;
            }else {
                this.inputClasses = '';
                this.placeholderName = 'Enter the note title';
                this.notes.push(this.inputValue);
                this.inputValue = '';
                if(this.notes.length > 0) {
                    this.removeBtnClasses = '';
                }
            }
        },
        keyPressHandler(event) {
            if(event.key === 'Enter') {
                this.addNote();
            }
        },
        removeNote() {
            
        }
    }

}
Vue.createApp(App).mount('#app');    // set values into html file