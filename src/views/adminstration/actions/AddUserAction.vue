<template>
  <div class="admin-action">
    <div class="admin-action__title">
      <h3>New User</h3>
    </div>

    <div class="admin-action__content">
      <form @submit.prevent="saveUser" class="user-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" required v-model="form.username" />
        </div>

        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" required v-model="form.first_name" />
        </div>

        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" required v-model="form.last_name" />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" required v-model="form.email" />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" required v-model="form.password" />
        </div>

        <div class="form-group">
          <label for="isAdmin">Is Admin</label>
          <select id="isAdmin" v-model="form.is_staff">
            <option :value="true">Yes</option>
            <option :value="false">No</option>
          </select>
        </div>

        <button type="submit" class="btn-submit">Save</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const form = reactive({
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      is_staff: false,
    });

    const saveUser = async () => {
      try {
        await store.dispatch('administrationManagement/CreateUser', form);

        // reset form
        Object.assign(form, {
          username: '',
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          is_staff: false,
        });

        alert('User created successfully');
      } catch (error) {
        console.error(error);
        alert('Failed to create user');
      }
    };

    return {
      form,
      saveUser,
    };
  },
});
</script>

<style lang="scss" scoped>
.admin-action {
  max-width: 500px;
  margin: 40px auto;
  padding: 25px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &__title {
    text-align: center;
    margin-bottom: 20px;

    h3 {
      font-size: 1.8rem;
      font-weight: 600;
      color: #333;
    }
  }

  &__content {
    .user-form {
      display: flex;
      flex-direction: column;
      gap: 15px;

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 5px;

        label {
          font-weight: 500;
          color: #555;
        }

        input,
        select {
          padding: 10px 12px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
          transition: all 0.3s;
        }

        input:focus,
        select:focus {
          border-color: #4a90e2;
          outline: none;
          box-shadow: 0 0 5px rgba(74, 144, 226, 0.3);
        }
      }

      .btn-submit {
        margin-top: 10px;
        padding: 12px 20px;
        font-size: 1rem;
        font-weight: 600;
        background-color: #4a90e2;
        color: #fff;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
          background-color: #357ABD;
        }
      }
    }
  }
}
</style>
