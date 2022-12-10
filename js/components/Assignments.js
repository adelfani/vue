import AssignmentList from "./AssignmentList.js";

export default {
  components: {
    AssignmentList,
  },
  template: `
    <assignment-list :assignments="inProgressAssignments" title="In progress"></assignment-list>
    <br />
    <assignment-list :assignments="computedAssignments" title="Completed"></assignment-list>
    `,
  data() {
    return {
      assignments: [
        { name: "Assignment 1", complete: false, id: 1 },
        { name: "Assignment 2", complete: false, id: 2 },
        { name: "Assignment 3", complete: false, id: 3 },
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
};
