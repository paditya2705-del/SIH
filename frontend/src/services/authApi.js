import { mockUsers } from '../data/mock/users';

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

export const authApi = {
  loginUser: async ({ email, password, role }) => {
    await delay(500);

    const normalizedRole = role?.toUpperCase();
    const user = Object.values(mockUsers).find(
      (item) => item.email === email && (!normalizedRole || item.role === normalizedRole)
    );

    if (!user) {
      throw new Error('Invalid email or role.');
    }

    if (password !== 'password123') {
      throw new Error('Invalid password.');
    }

    return {
      data: {
        user,
        token: user.token,
      },
    };
  },

  registerUser: async ({ name, email, password, role }) => {
    await delay(500);

    const normalizedRole = (role || 'CUSTOMER').toUpperCase();

    const user = {
      id: `mock-${Date.now()}`,
      name,
      email,
      role: normalizedRole,
      token: `mock-${normalizedRole.toLowerCase()}-token-${Date.now()}`,
    };

    return {
      data: {
        user,
        token: user.token,
      },
    };
  },

  logoutUser: async () => {
    await delay(200);
    return { data: { success: true } };
  },

  getCurrentUser: async () => {
    await delay(200);
    return {
      data: mockUsers.customer,
    };
  },
};

export default authApi;
