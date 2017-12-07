

export default {
    template: `
        <section   class="email-prev">
            {{item.subject}}
            {{item.sender}}
            {{item.timestamp}}
            <i class="fa fa-trash-o" aria-hidden="true" @click="emitDelete"></i>
        </section>
    `,
    props: ['item'],
    methods: {
        emitDelete() {
            console.log('mailPreview')
            // this.$emit('mailId', this.noteId)
        },


    },
 
}

