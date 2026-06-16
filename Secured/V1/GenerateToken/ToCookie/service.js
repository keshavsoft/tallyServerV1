import { JSONFilePreset } from 'lowdb/node'

const startFunc = async ({ inUserName, inPassword }) => {
    const db = await JSONFilePreset('Data/UsersTable.json', []);

    const findRow = db.data.find(element => {
        return element.UserName === inUserName &&
            element.Password === inPassword
    });

    if (findRow) return true;

    return false;
};

export { startFunc };
