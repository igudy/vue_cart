let app = Vue.createApp({
    data()
    {
      return{
        // Showsidebar is false
        showSideBar: false,
        inventory: [],
        cart: {},
      }
    },

    methods: {
      addToCart(name, index)
      {
        if (!this.cart[name]) { this.cart[name] = 0}
        this.cart[name] += this.inventory[index].quantity
        this.inventory[index].quantity = 0
        console.log(this.cart)
      },

      toggleSideBar(){
        this.showSideBar = !this.showSideBar
      },
      removeItem(name){
        delete this.cart[name]
      },
    },

    computed: {
      totalQuantity() {
        // She used something called reduced method here
        return Object.values(this.cart).reduce((acc, curr)=>{
          return acc + curr
        }, 0)
      }
    },

    // Asychronous call for the mounted function
    // Asychronous call must use await.
    // async mounted()
    // {
    //   const res = await fetch('./food.json')
    //   const data = await res.json()
    //   this.inventory = data
    // }

  })

  // Sidebar Component
  app.component('sidebar', {
    props: ['toggle', 'cart', 'inventory', 'remove'],

    methods: {
      getPrice(name)
      {
        const product = this.inventory.find((p)=>{
          return p.name === name
        })
        return product.price.USD
      },
      calculateTotal()
      {
        const total = Object.entries(this.cart).reduce((acc, curr, index) => {
          return acc + (curr[1] + this.getPrice(curr[0]))
        }, 0)
        return total.toFixed(2)
      },
    },
  })
  app.mount('#app')
