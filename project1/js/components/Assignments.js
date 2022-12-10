import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: {
    AssignmentList,
    AssignmentCreate,
  },
  template: `
    <section class="flex gap-8">
        <assignment-list :assignments="inProgressAssignments" title="In progress">
          <assignment-create @add="add"></assignment-create>
        </assignment-list>
        <assignment-list 
          v-if="showCompleted"
          :assignments="computedAssignments" 
          title="Completed" 
          canToggle
          @toggle="showCompleted = !showCompleted"
        ></assignment-list>
        
    </section>
    `,
  data() {
    return {
      assignments: [],
      showCompleted: true,
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
