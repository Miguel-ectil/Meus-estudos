
export const login = async (creds: {
    username: string;
    password: string;
  }): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (creds.username === "miguel" && creds.password === "123456") {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  };
  