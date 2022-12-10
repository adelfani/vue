import AssignmentList from "./AssignmentList.js";

export default {
  components: {
    AssignmentList,
  },
  template: `
    <section class="space-y-6">
        <assignment-list :assignments="inProgressAssignments" title="In progress"></assignment-list>
        <assignment-list :assignments="computedAssignments" title="Completed"></assignment-list>

        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black" >
                <input v-model="newAssignment" placeholder="New assignment..." class="p-2" />
                <button type="submit" class="bg-white p-2 border-l" >Add</button>
            </div>
        </form>
    </section>
    `,
  data() {
    return {
      assignments: [
        { name: "Assignment 1", complete: false, id: 1 },
        { name: "Assignment 2", complete: false, id: 2 },
        { name: "Assignment 3", complete: false, id: 3 },
      ],
      newAssignment: "",
    };
  },

  computed: {
    computedAssignments() {
      return this.assignments.filter((assignment) => assignment.complete);
    },
    inProgressAssignments() {
      return this.assignments.filter((assignment) => !assignment.complete);
    },
  },
  methods: {
    add() {
      this.assignments.push({
        name: this.newAssignment,
        complete: false,
        id: this.assignments.length + 1,
      });

      this.newAssignment = "";
    },
  },
};
