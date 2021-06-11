export const mixin = {
  data() {

  },
  methods: {
    cutPage() {
      if (this.listQuery.page !== 1) {
        if (Math.ceil(this.total / this.listQuery.limit) === this.listQuery.page) {
          if (this.total % this.listQuery.limit === 1) {
            --this.listQuery.page
          }
        }
      }
    }
  }
}
