type Field = {
  label: string;
  placeholder: string;
  validation?: {
    required: string;
    invalid?: string;
  };
};

export type Translations = {
  logo: string;
  home: {
    welcome: string;
    description: string;
  };
  about: {
    ourStory: string;
    aboutUs: string;
    description: {
      one: string;
      two: string;
    };
  };
  navbar: {
    home: string;
    about: string;
    contact: string;
    login: string;
    products: string;
    register: string;
    signOut: string;
    profile: string;
    admin: string;
  };
  validation: {
    nameRequired: string;
    validEmail: string;
    passwordMinLength: string;
    passwordMaxLength: string;
    confirmPasswordRequired: string;
    passwordMismatch: string;
  };
  messages: {
    userNotFound: string;
    incorrectPassword: string;
    loginSuccessful: string;
    unexpectedError: string;
    userAlreadyExists: string;
    accountCreated: string;
    updateProfileSucess: string;
    categoryAdded: string;
    updatecategorySucess: string;
    deleteCategorySucess: string;
    productAdded: string;
    updateProductSucess: string;
    deleteProductSucess: string;
    updateUserSucess: string;
    deleteUserSucess: string;
  };
  auth: {
    login: {
      title: string;
      name: Field;
      email: Field;
      password: Field;
      submit: string;
      authPrompt: {
        message: string;
        signUpLinkText: string;
      };
    };
    register: {
      title: string;
      name: Field;
      email: Field;
      password: Field;
      confirmPassword: Field;
      submit: string;
      authPrompt: {
        message: string;
        loginLinkText: string;
      };
    };
  };
  profile: {
    title: string;
    form: {
      name: Field;
      email: Field;
      phone: Field;
      address: Field;
      postalCode: Field;
      city: Field;
      country: Field;
    };
  };
  admin: {
    tabs: {
      profile: string;
      categories: string;
      menuItems: string;
      users: string;
      orders: string;
    };
    categories: {
      form: {
        editName: string;
        name: {
          label: string;
          placeholder: string;
          validation: {
            required: string;
          };
        };
      };
    };
    "menu-items": {
      addItemSize: string;
      createNewMenuItem: string;
      addExtraItem: string;
      menuOption: {
        name: string;
        extraPrice: string;
      };
      form: {
        name: {
          label: string;
          placeholder: string;
          validation: {
            required: string;
          };
        };
        description: {
          label: string;
          placeholder: string;
          validation: {
            required: string;
          };
        };
        basePrice: {
          label: string;
          placeholder: string;
          validation: {
            required: string;
          };
        };
        category: {
          validation: {
            required: string;
          };
        };
        image: {
          validation: {
            required: string;
          };
        };
      };
    };
  };
  category: string;
  save: string;
  edit: string;
  delete: string;
  cancel: string;
  create: string;
  copyRight: string;
  noProductsFound: string;
};
