<template>
<div class="container-fluid my-4 px-4">
    <div class="card shadow-sm">
      <div class="card-header bg-primary text-white">
        <h5 class="mb-0">Users Management</h5>
      </div>

      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-striped table-hover align-middle mb-0">
            <thead class="table-light">
              <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Email</th>
                <th>Last Login</th>
                <th>Admin</th>
                <th>Active</th>
                <th>Pwd Change</th>
                <th>Pwd Date</th>
                <th>Blocked</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(item, i) in users" :key="i">
                <td class="fw-semibold">{{ item.username }}</td>

                <td>
                  {{ item.first_name }} {{ item.last_name }}
                </td>

                <td>{{ item.email }}</td>

                <td>
                  {{ item.last_login ? formatDate(item.last_login) : 'Never' }}
                </td>

                <td>
                  <span
                    class="badge"
                    :class="item.is_staff ? 'bg-success' : 'bg-secondary'"
                  >
                    {{ item.is_staff ? 'Yes' : 'No' }}
                  </span>
                </td>

                <td>
                  <span
                    class="badge"
                    :class="item.is_active ? 'bg-success' : 'bg-danger'"
                  >
                    {{ item.is_active ? 'Active' : 'Inactive' }}
                  </span>
                </td>

                <td>
                  <span
                    class="badge"
                    :class="item.required_password_change ? 'bg-warning text-dark' : 'bg-success'"
                  >
                    {{ item.required_password_change ? 'Required' : 'No' }}
                  </span>
                </td>

                <td>
                  {{ item.password_change_date
                    ? formatDate(item.password_change_date)
                    : '—' }}
                </td>

                <td>
                  <span
                    class="badge"
                    :class="item.is_blocked ? 'bg-danger' : 'bg-success'"
                  >
                    {{ item.is_blocked ? 'Blocked' : 'OK' }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import formatDate from '@/composables/utils';

export default defineComponent({
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch('administrationManagement/SetUsers');
    });

    const users = computed(() => {
      return store.getters['administrationManagement/getUsers'] || [];
    });

    return {
      users,
      formatDate
    };
  }
});
</script>


<style lang="scss" scoped>

</style>
