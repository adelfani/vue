import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: {
    AssignmentList,
    AssignmentCreate,
  },
  template: `
    <section class="space-y-6">
        <assignment-list :assignments="inProgressAssignments" title="In progress"></assignment-list>
        <assignment-list :assignments="computedAssignments" title="Completed"></assignment-list>
        <assignment-create @add="add"></assignment-create>
    </section>
    `,
  data() {
    return {
      assignments: [],
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

  created() {
    fetch("http://localhost:3001/assignments")
      .then((res) => res.json())
      .then((data) => (this.assignments = data));
  },

  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        complete: false,
        id: this.assignments.length + 1,
      });
    },
  },
};
