export default {
  template: `
    <li>
        <label>
          {{ assignment.name }}
          <input
            type="checkbox"
            v-model="assignment.complete"
            :key="assignment.id"
          />
        </label>
    </li>
    `,
  props: {
    assignment: Object,
  },
};
