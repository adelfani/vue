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
      assignments: [
        { name: "Assignment 1", complete: false, id: 1, tag: "math" },
        { name: "Assignment 2", complete: false, id: 2, tag: "science" },
        { name: "Assignment 3", complete: false, id: 3, tag: "math" },
      ],
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
    add(name) {
      this.assignments.push({
        name: name,
        complete: false,
        id: this.assignments.length + 1,
      });
    },
  },
};
