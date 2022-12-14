export default {
  template: `
    <form @submit.prevent="add">
        <div class="border border-gray-600 text-black flex" >
            <input v-model="newAssignment" placeholder="New assignment..." class="w-full" />
            <button type="submit" class="bg-white p-1 border-l" >Add</button>
        </div>
    </form>
    `,

  data() {
    return {
      newAssignment: "",
    };
  },

  methods: {
    add() {
      this.$emit("add", this.newAssignment);
      this.newAssignment = "";
    },
  },
};
