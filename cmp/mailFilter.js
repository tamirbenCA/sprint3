import mailService from '../services/mailService.js'

export default {
    template: `
        <section>
            <input class="search-box" type="search" v-model="term" @input="searchMail" placeholder="Search for mail" />
            <label><input type="radio" value="all" v-model="type" @change="searchMail"> All</label>
            <label><input type="radio" value="true" v-model="type" @change="searchMail"> read</label>
            <label><input type="radio" value="false" v-model="type" @change="searchMail"> unread</label> 
        </section>
    `,
    data() {
        return {
            term: '',
            type:null,
            filterMails: [],
        }
    },

    methods: {
        searchMail() {
            if (this.term) {
                mailService.queryBySearchWord(this.term)
                    .then(mails => {
                        this.filterMails = mails
                        // console.log('filter:', this.filterMails);
                        this.$emit('filterMailsEvent', this.filterMails)
                    })
                    .catch(err => {
                        console.log(err);
                        this.mails = [];
                    })
            }
            else {
                console.log('this.type',this.type)
                mailService.filterReadUnread(this.type)
                    .then(mails => {
                        this.filterMails = mails
                        // console.log('filter:', this.filterMails);
                        this.$emit('filterMailsEvent', this.filterMails)
                    })
                    .catch(err => {
                        console.log(err);
                        this.mails = [];
                    })
            }
        }

    },


}

